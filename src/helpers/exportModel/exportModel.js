import downloadBlob from "../downloadBlob";
import { filterObject } from "../helpers";
import exportOptions from "./exportOptions";

const exporters = {
    stl: exportSTL,
    gltf: exportGLTF,
    usdz: exportUSDZ,
    ply: exportPLY,
};

/**
 * create a copy of the model without outlines
 * @param {THREE.Object3D} model
 */
const cloneModel = model => {
    const output = model.clone(true);

    output.traverse(child => {
        if (child.name === "outline") child.parent.remove(child);
    });

    return output;
};

/**
 * export 3d model
 * @param {THREE.Object3D} model
 * @param {AppExportState} settings
 */
export async function exportModel(model, settings) {
    const clone = cloneModel(model);
    const { format } = settings;
    const optionList = exportOptions.find(option => option.format === format)
        .options;

    const options = filterObject(settings, optionList);

    exporters[format](clone, options);
}

/**
 * convert model to stl data
 * @param {THREE.Object3D} model
 * @param {Object} options
 */
async function model2stl(model, options) {
    const { STLExporter } = await import(
        "three/examples/jsm/exporters/STLExporter"
    );
    const exporter = new STLExporter();

    return exporter.parse(model, options);
}

/**
 * ! NEEDS SMOOTHING
 */
/**
 * export model to stl
 * @param {THREE.Object3D} model
 * @param {Object} options
 */
async function exportSTL(model, options) {
    const fileContent = await model2stl(model, options);
    const blob = new Blob([fileContent], { type: "text/plain" });
    const fileName = "model.stl";

    downloadBlob(blob, fileName);
}

/**
 * convert model to glTF data
 * @param {THREE.Object3D} model
 * @param {{ }} options
 */
async function model2gltf(model, options) {
    const { GLTFExporter } = await import(
        "three/examples/jsm/exporters/GLTFExporter"
    );
    const exporter = new GLTFExporter();

    return new Promise(resolve => exporter.parse(model, resolve, options));
}

/**
 * ! NOT WORKING WITH MULTIPLE MATERIALS
 */
/**
 * export model to glTF
 * @param {THREE.Object3D} model
 * @param {Object} options
 */
async function exportGLTF(model, options) {
    const fileContent = await model2gltf(model, options);

    const { binary } = options;
    const blob = binary
        ? new Blob([fileContent], { type: "application/octet-stream" })
        : new Blob([JSON.stringify(fileContent)], { type: "text/plain" });

    const ext = binary ? "glb" : "gltf";
    const fileName = `model.${ext}`;

    downloadBlob(blob, fileName);
}

/**
 * convert a model to USDZ
 * @param {THREE.Object3D} model
 */
async function model2usdz(model) {
    const { USDZExporter } = await import(
        "three/examples/jsm/exporters/USDZExporter"
    );
    const exporter = new USDZExporter();
    return exporter.parse(model);
}

/**
 * ! NOT WORKING WITH MULTIPLE MATERIALS
 */
/**
 * Export a model to USDZ
 * @param {THREE.Object3D} model
 */
async function exportUSDZ(model) {
    const fileContent = await model2usdz(model);

    const blob = new Blob([fileContent], { type: "application/octet-stream" });
    const fileName = "model.usdz";

    downloadBlob(blob, fileName);
}

/**
 * convert model to ply data
 * @param {THREE.Object3D} model
 * @param {Object} options
 */
async function model2ply(model, options) {
    const { PLYExporter } = await import(
        "three/examples/jsm/exporters/PLYExporter"
    );
    const exporter = new PLYExporter();

    return new Promise(resolve => exporter.parse(model, resolve, options));
}

/**
 * ! NEEDS SMOOTHING
 */
/**
 * export model to stl
 * @param {THREE.Object3D} model
 * @param {Object} options
 */
async function exportPLY(model, options) {
    const fileContent = await model2ply(model, options);

    const { binary } = options;
    const blob = binary
        ? new Blob([fileContent], { type: "application/octet-stream" })
        : new Blob([fileContent], { type: "text/plain" });
    const fileName = "model.ply";

    downloadBlob(blob, fileName);
}
