"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/idb";
exports.ids = ["vendor-chunks/idb"];
exports.modules = {

/***/ "(ssr)/./node_modules/idb/build/index.js":
/*!*****************************************!*\
  !*** ./node_modules/idb/build/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   deleteDB: () => (/* binding */ deleteDB),\n/* harmony export */   openDB: () => (/* binding */ openDB),\n/* harmony export */   unwrap: () => (/* reexport safe */ _wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.u),\n/* harmony export */   wrap: () => (/* reexport safe */ _wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w)\n/* harmony export */ });\n/* harmony import */ var _wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wrap-idb-value.js */ \"(ssr)/./node_modules/idb/build/wrap-idb-value.js\");\n\n\n/**\n * Open a database.\n *\n * @param name Name of the database.\n * @param version Schema version.\n * @param callbacks Additional callbacks.\n */ function openDB(name, version, { blocked, upgrade, blocking, terminated } = {}) {\n    const request = indexedDB.open(name, version);\n    const openPromise = (0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w)(request);\n    if (upgrade) {\n        request.addEventListener(\"upgradeneeded\", (event)=>{\n            upgrade((0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w)(request.result), event.oldVersion, event.newVersion, (0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w)(request.transaction), event);\n        });\n    }\n    if (blocked) {\n        request.addEventListener(\"blocked\", (event)=>blocked(// Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405\n            event.oldVersion, event.newVersion, event));\n    }\n    openPromise.then((db)=>{\n        if (terminated) db.addEventListener(\"close\", ()=>terminated());\n        if (blocking) {\n            db.addEventListener(\"versionchange\", (event)=>blocking(event.oldVersion, event.newVersion, event));\n        }\n    }).catch(()=>{});\n    return openPromise;\n}\n/**\n * Delete a database.\n *\n * @param name Name of the database.\n */ function deleteDB(name, { blocked } = {}) {\n    const request = indexedDB.deleteDatabase(name);\n    if (blocked) {\n        request.addEventListener(\"blocked\", (event)=>blocked(// Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405\n            event.oldVersion, event));\n    }\n    return (0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w)(request).then(()=>undefined);\n}\nconst readMethods = [\n    \"get\",\n    \"getKey\",\n    \"getAll\",\n    \"getAllKeys\",\n    \"count\"\n];\nconst writeMethods = [\n    \"put\",\n    \"add\",\n    \"delete\",\n    \"clear\"\n];\nconst cachedMethods = new Map();\nfunction getMethod(target, prop) {\n    if (!(target instanceof IDBDatabase && !(prop in target) && typeof prop === \"string\")) {\n        return;\n    }\n    if (cachedMethods.get(prop)) return cachedMethods.get(prop);\n    const targetFuncName = prop.replace(/FromIndex$/, \"\");\n    const useIndex = prop !== targetFuncName;\n    const isWrite = writeMethods.includes(targetFuncName);\n    if (// Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.\n    !(targetFuncName in (useIndex ? IDBIndex : IDBObjectStore).prototype) || !(isWrite || readMethods.includes(targetFuncName))) {\n        return;\n    }\n    const method = async function(storeName, ...args) {\n        // isWrite ? 'readwrite' : undefined gzipps better, but fails in Edge :(\n        const tx = this.transaction(storeName, isWrite ? \"readwrite\" : \"readonly\");\n        let target = tx.store;\n        if (useIndex) target = target.index(args.shift());\n        // Must reject if op rejects.\n        // If it's a write operation, must reject if tx.done rejects.\n        // Must reject with op rejection first.\n        // Must resolve with op value.\n        // Must handle both promises (no unhandled rejections)\n        return (await Promise.all([\n            target[targetFuncName](...args),\n            isWrite && tx.done\n        ]))[0];\n    };\n    cachedMethods.set(prop, method);\n    return method;\n}\n(0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.r)((oldTraps)=>({\n        ...oldTraps,\n        get: (target, prop, receiver)=>getMethod(target, prop) || oldTraps.get(target, prop, receiver),\n        has: (target, prop)=>!!getMethod(target, prop) || oldTraps.has(target, prop)\n    }));\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaWRiL2J1aWxkL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQW1FO0FBQ047QUFFN0Q7Ozs7OztDQU1DLEdBQ0QsU0FBU00sT0FBT0MsSUFBSSxFQUFFQyxPQUFPLEVBQUUsRUFBRUMsT0FBTyxFQUFFQyxPQUFPLEVBQUVDLFFBQVEsRUFBRUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzFFLE1BQU1DLFVBQVVDLFVBQVVDLElBQUksQ0FBQ1IsTUFBTUM7SUFDckMsTUFBTVEsY0FBY2YscURBQUlBLENBQUNZO0lBQ3pCLElBQUlILFNBQVM7UUFDVEcsUUFBUUksZ0JBQWdCLENBQUMsaUJBQWlCLENBQUNDO1lBQ3ZDUixRQUFRVCxxREFBSUEsQ0FBQ1ksUUFBUU0sTUFBTSxHQUFHRCxNQUFNRSxVQUFVLEVBQUVGLE1BQU1HLFVBQVUsRUFBRXBCLHFEQUFJQSxDQUFDWSxRQUFRUyxXQUFXLEdBQUdKO1FBQ2pHO0lBQ0o7SUFDQSxJQUFJVCxTQUFTO1FBQ1RJLFFBQVFJLGdCQUFnQixDQUFDLFdBQVcsQ0FBQ0MsUUFBVVQsUUFDL0MscUZBQXFGO1lBQ3JGUyxNQUFNRSxVQUFVLEVBQUVGLE1BQU1HLFVBQVUsRUFBRUg7SUFDeEM7SUFDQUYsWUFDS08sSUFBSSxDQUFDLENBQUNDO1FBQ1AsSUFBSVosWUFDQVksR0FBR1AsZ0JBQWdCLENBQUMsU0FBUyxJQUFNTDtRQUN2QyxJQUFJRCxVQUFVO1lBQ1ZhLEdBQUdQLGdCQUFnQixDQUFDLGlCQUFpQixDQUFDQyxRQUFVUCxTQUFTTyxNQUFNRSxVQUFVLEVBQUVGLE1BQU1HLFVBQVUsRUFBRUg7UUFDakc7SUFDSixHQUNLTyxLQUFLLENBQUMsS0FBUTtJQUNuQixPQUFPVDtBQUNYO0FBQ0E7Ozs7Q0FJQyxHQUNELFNBQVNVLFNBQVNuQixJQUFJLEVBQUUsRUFBRUUsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3BDLE1BQU1JLFVBQVVDLFVBQVVhLGNBQWMsQ0FBQ3BCO0lBQ3pDLElBQUlFLFNBQVM7UUFDVEksUUFBUUksZ0JBQWdCLENBQUMsV0FBVyxDQUFDQyxRQUFVVCxRQUMvQyxxRkFBcUY7WUFDckZTLE1BQU1FLFVBQVUsRUFBRUY7SUFDdEI7SUFDQSxPQUFPakIscURBQUlBLENBQUNZLFNBQVNVLElBQUksQ0FBQyxJQUFNSztBQUNwQztBQUVBLE1BQU1DLGNBQWM7SUFBQztJQUFPO0lBQVU7SUFBVTtJQUFjO0NBQVE7QUFDdEUsTUFBTUMsZUFBZTtJQUFDO0lBQU87SUFBTztJQUFVO0NBQVE7QUFDdEQsTUFBTUMsZ0JBQWdCLElBQUlDO0FBQzFCLFNBQVNDLFVBQVVDLE1BQU0sRUFBRUMsSUFBSTtJQUMzQixJQUFJLENBQUVELENBQUFBLGtCQUFrQkUsZUFDcEIsQ0FBRUQsQ0FBQUEsUUFBUUQsTUFBSyxLQUNmLE9BQU9DLFNBQVMsUUFBTyxHQUFJO1FBQzNCO0lBQ0o7SUFDQSxJQUFJSixjQUFjTSxHQUFHLENBQUNGLE9BQ2xCLE9BQU9KLGNBQWNNLEdBQUcsQ0FBQ0Y7SUFDN0IsTUFBTUcsaUJBQWlCSCxLQUFLSSxPQUFPLENBQUMsY0FBYztJQUNsRCxNQUFNQyxXQUFXTCxTQUFTRztJQUMxQixNQUFNRyxVQUFVWCxhQUFhWSxRQUFRLENBQUNKO0lBQ3RDLElBQ0EsNEVBQTRFO0lBQzVFLENBQUVBLENBQUFBLGtCQUFrQixDQUFDRSxXQUFXRyxXQUFXQyxjQUFhLEVBQUdDLFNBQVMsS0FDaEUsQ0FBRUosQ0FBQUEsV0FBV1osWUFBWWEsUUFBUSxDQUFDSixlQUFjLEdBQUk7UUFDcEQ7SUFDSjtJQUNBLE1BQU1RLFNBQVMsZUFBZ0JDLFNBQVMsRUFBRSxHQUFHQyxJQUFJO1FBQzdDLHdFQUF3RTtRQUN4RSxNQUFNQyxLQUFLLElBQUksQ0FBQzNCLFdBQVcsQ0FBQ3lCLFdBQVdOLFVBQVUsY0FBYztRQUMvRCxJQUFJUCxTQUFTZSxHQUFHQyxLQUFLO1FBQ3JCLElBQUlWLFVBQ0FOLFNBQVNBLE9BQU9pQixLQUFLLENBQUNILEtBQUtJLEtBQUs7UUFDcEMsNkJBQTZCO1FBQzdCLDZEQUE2RDtRQUM3RCx1Q0FBdUM7UUFDdkMsOEJBQThCO1FBQzlCLHNEQUFzRDtRQUN0RCxPQUFPLENBQUMsTUFBTUMsUUFBUUMsR0FBRyxDQUFDO1lBQ3RCcEIsTUFBTSxDQUFDSSxlQUFlLElBQUlVO1lBQzFCUCxXQUFXUSxHQUFHTSxJQUFJO1NBQ3JCLEVBQUUsQ0FBQyxFQUFFO0lBQ1Y7SUFDQXhCLGNBQWN5QixHQUFHLENBQUNyQixNQUFNVztJQUN4QixPQUFPQTtBQUNYO0FBQ0EzQyxxREFBWUEsQ0FBQyxDQUFDc0QsV0FBYztRQUN4QixHQUFHQSxRQUFRO1FBQ1hwQixLQUFLLENBQUNILFFBQVFDLE1BQU11QixXQUFhekIsVUFBVUMsUUFBUUMsU0FBU3NCLFNBQVNwQixHQUFHLENBQUNILFFBQVFDLE1BQU11QjtRQUN2RkMsS0FBSyxDQUFDekIsUUFBUUMsT0FBUyxDQUFDLENBQUNGLFVBQVVDLFFBQVFDLFNBQVNzQixTQUFTRSxHQUFHLENBQUN6QixRQUFRQztJQUM3RTtBQUU0QiIsInNvdXJjZXMiOlsid2VicGFjazovL3Nob3BwaW5nLWNhcnQvLi9ub2RlX21vZHVsZXMvaWRiL2J1aWxkL2luZGV4LmpzPzkxMzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdyBhcyB3cmFwLCByIGFzIHJlcGxhY2VUcmFwcyB9IGZyb20gJy4vd3JhcC1pZGItdmFsdWUuanMnO1xuZXhwb3J0IHsgdSBhcyB1bndyYXAsIHcgYXMgd3JhcCB9IGZyb20gJy4vd3JhcC1pZGItdmFsdWUuanMnO1xuXG4vKipcbiAqIE9wZW4gYSBkYXRhYmFzZS5cbiAqXG4gKiBAcGFyYW0gbmFtZSBOYW1lIG9mIHRoZSBkYXRhYmFzZS5cbiAqIEBwYXJhbSB2ZXJzaW9uIFNjaGVtYSB2ZXJzaW9uLlxuICogQHBhcmFtIGNhbGxiYWNrcyBBZGRpdGlvbmFsIGNhbGxiYWNrcy5cbiAqL1xuZnVuY3Rpb24gb3BlbkRCKG5hbWUsIHZlcnNpb24sIHsgYmxvY2tlZCwgdXBncmFkZSwgYmxvY2tpbmcsIHRlcm1pbmF0ZWQgfSA9IHt9KSB7XG4gICAgY29uc3QgcmVxdWVzdCA9IGluZGV4ZWREQi5vcGVuKG5hbWUsIHZlcnNpb24pO1xuICAgIGNvbnN0IG9wZW5Qcm9taXNlID0gd3JhcChyZXF1ZXN0KTtcbiAgICBpZiAodXBncmFkZSkge1xuICAgICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ3VwZ3JhZGVuZWVkZWQnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHVwZ3JhZGUod3JhcChyZXF1ZXN0LnJlc3VsdCksIGV2ZW50Lm9sZFZlcnNpb24sIGV2ZW50Lm5ld1ZlcnNpb24sIHdyYXAocmVxdWVzdC50cmFuc2FjdGlvbiksIGV2ZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChibG9ja2VkKSB7XG4gICAgICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcignYmxvY2tlZCcsIChldmVudCkgPT4gYmxvY2tlZChcbiAgICAgICAgLy8gQ2FzdGluZyBkdWUgdG8gaHR0cHM6Ly9naXRodWIuY29tL21pY3Jvc29mdC9UeXBlU2NyaXB0LURPTS1saWItZ2VuZXJhdG9yL3B1bGwvMTQwNVxuICAgICAgICBldmVudC5vbGRWZXJzaW9uLCBldmVudC5uZXdWZXJzaW9uLCBldmVudCkpO1xuICAgIH1cbiAgICBvcGVuUHJvbWlzZVxuICAgICAgICAudGhlbigoZGIpID0+IHtcbiAgICAgICAgaWYgKHRlcm1pbmF0ZWQpXG4gICAgICAgICAgICBkYi5hZGRFdmVudExpc3RlbmVyKCdjbG9zZScsICgpID0+IHRlcm1pbmF0ZWQoKSk7XG4gICAgICAgIGlmIChibG9ja2luZykge1xuICAgICAgICAgICAgZGIuYWRkRXZlbnRMaXN0ZW5lcigndmVyc2lvbmNoYW5nZScsIChldmVudCkgPT4gYmxvY2tpbmcoZXZlbnQub2xkVmVyc2lvbiwgZXZlbnQubmV3VmVyc2lvbiwgZXZlbnQpKTtcbiAgICAgICAgfVxuICAgIH0pXG4gICAgICAgIC5jYXRjaCgoKSA9PiB7IH0pO1xuICAgIHJldHVybiBvcGVuUHJvbWlzZTtcbn1cbi8qKlxuICogRGVsZXRlIGEgZGF0YWJhc2UuXG4gKlxuICogQHBhcmFtIG5hbWUgTmFtZSBvZiB0aGUgZGF0YWJhc2UuXG4gKi9cbmZ1bmN0aW9uIGRlbGV0ZURCKG5hbWUsIHsgYmxvY2tlZCB9ID0ge30pIHtcbiAgICBjb25zdCByZXF1ZXN0ID0gaW5kZXhlZERCLmRlbGV0ZURhdGFiYXNlKG5hbWUpO1xuICAgIGlmIChibG9ja2VkKSB7XG4gICAgICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcignYmxvY2tlZCcsIChldmVudCkgPT4gYmxvY2tlZChcbiAgICAgICAgLy8gQ2FzdGluZyBkdWUgdG8gaHR0cHM6Ly9naXRodWIuY29tL21pY3Jvc29mdC9UeXBlU2NyaXB0LURPTS1saWItZ2VuZXJhdG9yL3B1bGwvMTQwNVxuICAgICAgICBldmVudC5vbGRWZXJzaW9uLCBldmVudCkpO1xuICAgIH1cbiAgICByZXR1cm4gd3JhcChyZXF1ZXN0KS50aGVuKCgpID0+IHVuZGVmaW5lZCk7XG59XG5cbmNvbnN0IHJlYWRNZXRob2RzID0gWydnZXQnLCAnZ2V0S2V5JywgJ2dldEFsbCcsICdnZXRBbGxLZXlzJywgJ2NvdW50J107XG5jb25zdCB3cml0ZU1ldGhvZHMgPSBbJ3B1dCcsICdhZGQnLCAnZGVsZXRlJywgJ2NsZWFyJ107XG5jb25zdCBjYWNoZWRNZXRob2RzID0gbmV3IE1hcCgpO1xuZnVuY3Rpb24gZ2V0TWV0aG9kKHRhcmdldCwgcHJvcCkge1xuICAgIGlmICghKHRhcmdldCBpbnN0YW5jZW9mIElEQkRhdGFiYXNlICYmXG4gICAgICAgICEocHJvcCBpbiB0YXJnZXQpICYmXG4gICAgICAgIHR5cGVvZiBwcm9wID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoY2FjaGVkTWV0aG9kcy5nZXQocHJvcCkpXG4gICAgICAgIHJldHVybiBjYWNoZWRNZXRob2RzLmdldChwcm9wKTtcbiAgICBjb25zdCB0YXJnZXRGdW5jTmFtZSA9IHByb3AucmVwbGFjZSgvRnJvbUluZGV4JC8sICcnKTtcbiAgICBjb25zdCB1c2VJbmRleCA9IHByb3AgIT09IHRhcmdldEZ1bmNOYW1lO1xuICAgIGNvbnN0IGlzV3JpdGUgPSB3cml0ZU1ldGhvZHMuaW5jbHVkZXModGFyZ2V0RnVuY05hbWUpO1xuICAgIGlmIChcbiAgICAvLyBCYWlsIGlmIHRoZSB0YXJnZXQgZG9lc24ndCBleGlzdCBvbiB0aGUgdGFyZ2V0LiBFZywgZ2V0QWxsIGlzbid0IGluIEVkZ2UuXG4gICAgISh0YXJnZXRGdW5jTmFtZSBpbiAodXNlSW5kZXggPyBJREJJbmRleCA6IElEQk9iamVjdFN0b3JlKS5wcm90b3R5cGUpIHx8XG4gICAgICAgICEoaXNXcml0ZSB8fCByZWFkTWV0aG9kcy5pbmNsdWRlcyh0YXJnZXRGdW5jTmFtZSkpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgbWV0aG9kID0gYXN5bmMgZnVuY3Rpb24gKHN0b3JlTmFtZSwgLi4uYXJncykge1xuICAgICAgICAvLyBpc1dyaXRlID8gJ3JlYWR3cml0ZScgOiB1bmRlZmluZWQgZ3ppcHBzIGJldHRlciwgYnV0IGZhaWxzIGluIEVkZ2UgOihcbiAgICAgICAgY29uc3QgdHggPSB0aGlzLnRyYW5zYWN0aW9uKHN0b3JlTmFtZSwgaXNXcml0ZSA/ICdyZWFkd3JpdGUnIDogJ3JlYWRvbmx5Jyk7XG4gICAgICAgIGxldCB0YXJnZXQgPSB0eC5zdG9yZTtcbiAgICAgICAgaWYgKHVzZUluZGV4KVxuICAgICAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0LmluZGV4KGFyZ3Muc2hpZnQoKSk7XG4gICAgICAgIC8vIE11c3QgcmVqZWN0IGlmIG9wIHJlamVjdHMuXG4gICAgICAgIC8vIElmIGl0J3MgYSB3cml0ZSBvcGVyYXRpb24sIG11c3QgcmVqZWN0IGlmIHR4LmRvbmUgcmVqZWN0cy5cbiAgICAgICAgLy8gTXVzdCByZWplY3Qgd2l0aCBvcCByZWplY3Rpb24gZmlyc3QuXG4gICAgICAgIC8vIE11c3QgcmVzb2x2ZSB3aXRoIG9wIHZhbHVlLlxuICAgICAgICAvLyBNdXN0IGhhbmRsZSBib3RoIHByb21pc2VzIChubyB1bmhhbmRsZWQgcmVqZWN0aW9ucylcbiAgICAgICAgcmV0dXJuIChhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICB0YXJnZXRbdGFyZ2V0RnVuY05hbWVdKC4uLmFyZ3MpLFxuICAgICAgICAgICAgaXNXcml0ZSAmJiB0eC5kb25lLFxuICAgICAgICBdKSlbMF07XG4gICAgfTtcbiAgICBjYWNoZWRNZXRob2RzLnNldChwcm9wLCBtZXRob2QpO1xuICAgIHJldHVybiBtZXRob2Q7XG59XG5yZXBsYWNlVHJhcHMoKG9sZFRyYXBzKSA9PiAoe1xuICAgIC4uLm9sZFRyYXBzLFxuICAgIGdldDogKHRhcmdldCwgcHJvcCwgcmVjZWl2ZXIpID0+IGdldE1ldGhvZCh0YXJnZXQsIHByb3ApIHx8IG9sZFRyYXBzLmdldCh0YXJnZXQsIHByb3AsIHJlY2VpdmVyKSxcbiAgICBoYXM6ICh0YXJnZXQsIHByb3ApID0+ICEhZ2V0TWV0aG9kKHRhcmdldCwgcHJvcCkgfHwgb2xkVHJhcHMuaGFzKHRhcmdldCwgcHJvcCksXG59KSk7XG5cbmV4cG9ydCB7IGRlbGV0ZURCLCBvcGVuREIgfTtcbiJdLCJuYW1lcyI6WyJ3Iiwid3JhcCIsInIiLCJyZXBsYWNlVHJhcHMiLCJ1IiwidW53cmFwIiwib3BlbkRCIiwibmFtZSIsInZlcnNpb24iLCJibG9ja2VkIiwidXBncmFkZSIsImJsb2NraW5nIiwidGVybWluYXRlZCIsInJlcXVlc3QiLCJpbmRleGVkREIiLCJvcGVuIiwib3BlblByb21pc2UiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJyZXN1bHQiLCJvbGRWZXJzaW9uIiwibmV3VmVyc2lvbiIsInRyYW5zYWN0aW9uIiwidGhlbiIsImRiIiwiY2F0Y2giLCJkZWxldGVEQiIsImRlbGV0ZURhdGFiYXNlIiwidW5kZWZpbmVkIiwicmVhZE1ldGhvZHMiLCJ3cml0ZU1ldGhvZHMiLCJjYWNoZWRNZXRob2RzIiwiTWFwIiwiZ2V0TWV0aG9kIiwidGFyZ2V0IiwicHJvcCIsIklEQkRhdGFiYXNlIiwiZ2V0IiwidGFyZ2V0RnVuY05hbWUiLCJyZXBsYWNlIiwidXNlSW5kZXgiLCJpc1dyaXRlIiwiaW5jbHVkZXMiLCJJREJJbmRleCIsIklEQk9iamVjdFN0b3JlIiwicHJvdG90eXBlIiwibWV0aG9kIiwic3RvcmVOYW1lIiwiYXJncyIsInR4Iiwic3RvcmUiLCJpbmRleCIsInNoaWZ0IiwiUHJvbWlzZSIsImFsbCIsImRvbmUiLCJzZXQiLCJvbGRUcmFwcyIsInJlY2VpdmVyIiwiaGFzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/idb/build/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/idb/build/wrap-idb-value.js":
/*!**************************************************!*\
  !*** ./node_modules/idb/build/wrap-idb-value.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   a: () => (/* binding */ reverseTransformCache),\n/* harmony export */   i: () => (/* binding */ instanceOfAny),\n/* harmony export */   r: () => (/* binding */ replaceTraps),\n/* harmony export */   u: () => (/* binding */ unwrap),\n/* harmony export */   w: () => (/* binding */ wrap)\n/* harmony export */ });\nconst instanceOfAny = (object, constructors)=>constructors.some((c)=>object instanceof c);\nlet idbProxyableTypes;\nlet cursorAdvanceMethods;\n// This is a function to prevent it throwing up in node environments.\nfunction getIdbProxyableTypes() {\n    return idbProxyableTypes || (idbProxyableTypes = [\n        IDBDatabase,\n        IDBObjectStore,\n        IDBIndex,\n        IDBCursor,\n        IDBTransaction\n    ]);\n}\n// This is a function to prevent it throwing up in node environments.\nfunction getCursorAdvanceMethods() {\n    return cursorAdvanceMethods || (cursorAdvanceMethods = [\n        IDBCursor.prototype.advance,\n        IDBCursor.prototype.continue,\n        IDBCursor.prototype.continuePrimaryKey\n    ]);\n}\nconst cursorRequestMap = new WeakMap();\nconst transactionDoneMap = new WeakMap();\nconst transactionStoreNamesMap = new WeakMap();\nconst transformCache = new WeakMap();\nconst reverseTransformCache = new WeakMap();\nfunction promisifyRequest(request) {\n    const promise = new Promise((resolve, reject)=>{\n        const unlisten = ()=>{\n            request.removeEventListener(\"success\", success);\n            request.removeEventListener(\"error\", error);\n        };\n        const success = ()=>{\n            resolve(wrap(request.result));\n            unlisten();\n        };\n        const error = ()=>{\n            reject(request.error);\n            unlisten();\n        };\n        request.addEventListener(\"success\", success);\n        request.addEventListener(\"error\", error);\n    });\n    promise.then((value)=>{\n        // Since cursoring reuses the IDBRequest (*sigh*), we cache it for later retrieval\n        // (see wrapFunction).\n        if (value instanceof IDBCursor) {\n            cursorRequestMap.set(value, request);\n        }\n    // Catching to avoid \"Uncaught Promise exceptions\"\n    }).catch(()=>{});\n    // This mapping exists in reverseTransformCache but doesn't doesn't exist in transformCache. This\n    // is because we create many promises from a single IDBRequest.\n    reverseTransformCache.set(promise, request);\n    return promise;\n}\nfunction cacheDonePromiseForTransaction(tx) {\n    // Early bail if we've already created a done promise for this transaction.\n    if (transactionDoneMap.has(tx)) return;\n    const done = new Promise((resolve, reject)=>{\n        const unlisten = ()=>{\n            tx.removeEventListener(\"complete\", complete);\n            tx.removeEventListener(\"error\", error);\n            tx.removeEventListener(\"abort\", error);\n        };\n        const complete = ()=>{\n            resolve();\n            unlisten();\n        };\n        const error = ()=>{\n            reject(tx.error || new DOMException(\"AbortError\", \"AbortError\"));\n            unlisten();\n        };\n        tx.addEventListener(\"complete\", complete);\n        tx.addEventListener(\"error\", error);\n        tx.addEventListener(\"abort\", error);\n    });\n    // Cache it for later retrieval.\n    transactionDoneMap.set(tx, done);\n}\nlet idbProxyTraps = {\n    get (target, prop, receiver) {\n        if (target instanceof IDBTransaction) {\n            // Special handling for transaction.done.\n            if (prop === \"done\") return transactionDoneMap.get(target);\n            // Polyfill for objectStoreNames because of Edge.\n            if (prop === \"objectStoreNames\") {\n                return target.objectStoreNames || transactionStoreNamesMap.get(target);\n            }\n            // Make tx.store return the only store in the transaction, or undefined if there are many.\n            if (prop === \"store\") {\n                return receiver.objectStoreNames[1] ? undefined : receiver.objectStore(receiver.objectStoreNames[0]);\n            }\n        }\n        // Else transform whatever we get back.\n        return wrap(target[prop]);\n    },\n    set (target, prop, value) {\n        target[prop] = value;\n        return true;\n    },\n    has (target, prop) {\n        if (target instanceof IDBTransaction && (prop === \"done\" || prop === \"store\")) {\n            return true;\n        }\n        return prop in target;\n    }\n};\nfunction replaceTraps(callback) {\n    idbProxyTraps = callback(idbProxyTraps);\n}\nfunction wrapFunction(func) {\n    // Due to expected object equality (which is enforced by the caching in `wrap`), we\n    // only create one new func per func.\n    // Edge doesn't support objectStoreNames (booo), so we polyfill it here.\n    if (func === IDBDatabase.prototype.transaction && !(\"objectStoreNames\" in IDBTransaction.prototype)) {\n        return function(storeNames, ...args) {\n            const tx = func.call(unwrap(this), storeNames, ...args);\n            transactionStoreNamesMap.set(tx, storeNames.sort ? storeNames.sort() : [\n                storeNames\n            ]);\n            return wrap(tx);\n        };\n    }\n    // Cursor methods are special, as the behaviour is a little more different to standard IDB. In\n    // IDB, you advance the cursor and wait for a new 'success' on the IDBRequest that gave you the\n    // cursor. It's kinda like a promise that can resolve with many values. That doesn't make sense\n    // with real promises, so each advance methods returns a new promise for the cursor object, or\n    // undefined if the end of the cursor has been reached.\n    if (getCursorAdvanceMethods().includes(func)) {\n        return function(...args) {\n            // Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use\n            // the original object.\n            func.apply(unwrap(this), args);\n            return wrap(cursorRequestMap.get(this));\n        };\n    }\n    return function(...args) {\n        // Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use\n        // the original object.\n        return wrap(func.apply(unwrap(this), args));\n    };\n}\nfunction transformCachableValue(value) {\n    if (typeof value === \"function\") return wrapFunction(value);\n    // This doesn't return, it just creates a 'done' promise for the transaction,\n    // which is later returned for transaction.done (see idbObjectHandler).\n    if (value instanceof IDBTransaction) cacheDonePromiseForTransaction(value);\n    if (instanceOfAny(value, getIdbProxyableTypes())) return new Proxy(value, idbProxyTraps);\n    // Return the same value back if we're not going to transform it.\n    return value;\n}\nfunction wrap(value) {\n    // We sometimes generate multiple promises from a single IDBRequest (eg when cursoring), because\n    // IDB is weird and a single IDBRequest can yield many responses, so these can't be cached.\n    if (value instanceof IDBRequest) return promisifyRequest(value);\n    // If we've already transformed this value before, reuse the transformed value.\n    // This is faster, but it also provides object equality.\n    if (transformCache.has(value)) return transformCache.get(value);\n    const newValue = transformCachableValue(value);\n    // Not all types are transformed.\n    // These may be primitive types, so they can't be WeakMap keys.\n    if (newValue !== value) {\n        transformCache.set(value, newValue);\n        reverseTransformCache.set(newValue, value);\n    }\n    return newValue;\n}\nconst unwrap = (value)=>reverseTransformCache.get(value);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaWRiL2J1aWxkL3dyYXAtaWRiLXZhbHVlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsTUFBTUEsZ0JBQWdCLENBQUNDLFFBQVFDLGVBQWlCQSxhQUFhQyxJQUFJLENBQUMsQ0FBQ0MsSUFBTUgsa0JBQWtCRztBQUUzRixJQUFJQztBQUNKLElBQUlDO0FBQ0oscUVBQXFFO0FBQ3JFLFNBQVNDO0lBQ0wsT0FBUUYscUJBQ0hBLENBQUFBLG9CQUFvQjtRQUNqQkc7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7S0FDSDtBQUNUO0FBQ0EscUVBQXFFO0FBQ3JFLFNBQVNDO0lBQ0wsT0FBUVAsd0JBQ0hBLENBQUFBLHVCQUF1QjtRQUNwQkssVUFBVUcsU0FBUyxDQUFDQyxPQUFPO1FBQzNCSixVQUFVRyxTQUFTLENBQUNFLFFBQVE7UUFDNUJMLFVBQVVHLFNBQVMsQ0FBQ0csa0JBQWtCO0tBQ3pDO0FBQ1Q7QUFDQSxNQUFNQyxtQkFBbUIsSUFBSUM7QUFDN0IsTUFBTUMscUJBQXFCLElBQUlEO0FBQy9CLE1BQU1FLDJCQUEyQixJQUFJRjtBQUNyQyxNQUFNRyxpQkFBaUIsSUFBSUg7QUFDM0IsTUFBTUksd0JBQXdCLElBQUlKO0FBQ2xDLFNBQVNLLGlCQUFpQkMsT0FBTztJQUM3QixNQUFNQyxVQUFVLElBQUlDLFFBQVEsQ0FBQ0MsU0FBU0M7UUFDbEMsTUFBTUMsV0FBVztZQUNiTCxRQUFRTSxtQkFBbUIsQ0FBQyxXQUFXQztZQUN2Q1AsUUFBUU0sbUJBQW1CLENBQUMsU0FBU0U7UUFDekM7UUFDQSxNQUFNRCxVQUFVO1lBQ1pKLFFBQVFNLEtBQUtULFFBQVFVLE1BQU07WUFDM0JMO1FBQ0o7UUFDQSxNQUFNRyxRQUFRO1lBQ1ZKLE9BQU9KLFFBQVFRLEtBQUs7WUFDcEJIO1FBQ0o7UUFDQUwsUUFBUVcsZ0JBQWdCLENBQUMsV0FBV0o7UUFDcENQLFFBQVFXLGdCQUFnQixDQUFDLFNBQVNIO0lBQ3RDO0lBQ0FQLFFBQ0tXLElB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LENBQUN6QixRQUFVZixzQkFBc0J5QixHQUFHLENBQUNWO0FBRWlEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2hvcHBpbmctY2FydC8uL25vZGVfbW9kdWxlcy9pZGIvYnVpbGQvd3JhcC1pZGItdmFsdWUuanM/ODY5YyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBpbnN0YW5jZU9mQW55ID0gKG9iamVjdCwgY29uc3RydWN0b3JzKSA9PiBjb25zdHJ1Y3RvcnMuc29tZSgoYykgPT4gb2JqZWN0IGluc3RhbmNlb2YgYyk7XG5cbmxldCBpZGJQcm94eWFibGVUeXBlcztcbmxldCBjdXJzb3JBZHZhbmNlTWV0aG9kcztcbi8vIFRoaXMgaXMgYSBmdW5jdGlvbiB0byBwcmV2ZW50IGl0IHRocm93aW5nIHVwIGluIG5vZGUgZW52aXJvbm1lbnRzLlxuZnVuY3Rpb24gZ2V0SWRiUHJveHlhYmxlVHlwZXMoKSB7XG4gICAgcmV0dXJuIChpZGJQcm94eWFibGVUeXBlcyB8fFxuICAgICAgICAoaWRiUHJveHlhYmxlVHlwZXMgPSBbXG4gICAgICAgICAgICBJREJEYXRhYmFzZSxcbiAgICAgICAgICAgIElEQk9iamVjdFN0b3JlLFxuICAgICAgICAgICAgSURCSW5kZXgsXG4gICAgICAgICAgICBJREJDdXJzb3IsXG4gICAgICAgICAgICBJREJUcmFuc2FjdGlvbixcbiAgICAgICAgXSkpO1xufVxuLy8gVGhpcyBpcyBhIGZ1bmN0aW9uIHRvIHByZXZlbnQgaXQgdGhyb3dpbmcgdXAgaW4gbm9kZSBlbnZpcm9ubWVudHMuXG5mdW5jdGlvbiBnZXRDdXJzb3JBZHZhbmNlTWV0aG9kcygpIHtcbiAgICByZXR1cm4gKGN1cnNvckFkdmFuY2VNZXRob2RzIHx8XG4gICAgICAgIChjdXJzb3JBZHZhbmNlTWV0aG9kcyA9IFtcbiAgICAgICAgICAgIElEQkN1cnNvci5wcm90b3R5cGUuYWR2YW5jZSxcbiAgICAgICAgICAgIElEQkN1cnNvci5wcm90b3R5cGUuY29udGludWUsXG4gICAgICAgICAgICBJREJDdXJzb3IucHJvdG90eXBlLmNvbnRpbnVlUHJpbWFyeUtleSxcbiAgICAgICAgXSkpO1xufVxuY29uc3QgY3Vyc29yUmVxdWVzdE1hcCA9IG5ldyBXZWFrTWFwKCk7XG5jb25zdCB0cmFuc2FjdGlvbkRvbmVNYXAgPSBuZXcgV2Vha01hcCgpO1xuY29uc3QgdHJhbnNhY3Rpb25TdG9yZU5hbWVzTWFwID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IHRyYW5zZm9ybUNhY2hlID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IHJldmVyc2VUcmFuc2Zvcm1DYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5mdW5jdGlvbiBwcm9taXNpZnlSZXF1ZXN0KHJlcXVlc3QpIHtcbiAgICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBjb25zdCB1bmxpc3RlbiA9ICgpID0+IHtcbiAgICAgICAgICAgIHJlcXVlc3QucmVtb3ZlRXZlbnRMaXN0ZW5lcignc3VjY2VzcycsIHN1Y2Nlc3MpO1xuICAgICAgICAgICAgcmVxdWVzdC5yZW1vdmVFdmVudExpc3RlbmVyKCdlcnJvcicsIGVycm9yKTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3Qgc3VjY2VzcyA9ICgpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUod3JhcChyZXF1ZXN0LnJlc3VsdCkpO1xuICAgICAgICAgICAgdW5saXN0ZW4oKTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgZXJyb3IgPSAoKSA9PiB7XG4gICAgICAgICAgICByZWplY3QocmVxdWVzdC5lcnJvcik7XG4gICAgICAgICAgICB1bmxpc3RlbigpO1xuICAgICAgICB9O1xuICAgICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Y2Nlc3MnLCBzdWNjZXNzKTtcbiAgICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIGVycm9yKTtcbiAgICB9KTtcbiAgICBwcm9taXNlXG4gICAgICAgIC50aGVuKCh2YWx1ZSkgPT4ge1xuICAgICAgICAvLyBTaW5jZSBjdXJzb3JpbmcgcmV1c2VzIHRoZSBJREJSZXF1ZXN0ICgqc2lnaCopLCB3ZSBjYWNoZSBpdCBmb3IgbGF0ZXIgcmV0cmlldmFsXG4gICAgICAgIC8vIChzZWUgd3JhcEZ1bmN0aW9uKS5cbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgSURCQ3Vyc29yKSB7XG4gICAgICAgICAgICBjdXJzb3JSZXF1ZXN0TWFwLnNldCh2YWx1ZSwgcmVxdWVzdCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2F0Y2hpbmcgdG8gYXZvaWQgXCJVbmNhdWdodCBQcm9taXNlIGV4Y2VwdGlvbnNcIlxuICAgIH0pXG4gICAgICAgIC5jYXRjaCgoKSA9PiB7IH0pO1xuICAgIC8vIFRoaXMgbWFwcGluZyBleGlzdHMgaW4gcmV2ZXJzZVRyYW5zZm9ybUNhY2hlIGJ1dCBkb2Vzbid0IGRvZXNuJ3QgZXhpc3QgaW4gdHJhbnNmb3JtQ2FjaGUuIFRoaXNcbiAgICAvLyBpcyBiZWNhdXNlIHdlIGNyZWF0ZSBtYW55IHByb21pc2VzIGZyb20gYSBzaW5nbGUgSURCUmVxdWVzdC5cbiAgICByZXZlcnNlVHJhbnNmb3JtQ2FjaGUuc2V0KHByb21pc2UsIHJlcXVlc3QpO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuZnVuY3Rpb24gY2FjaGVEb25lUHJvbWlzZUZvclRyYW5zYWN0aW9uKHR4KSB7XG4gICAgLy8gRWFybHkgYmFpbCBpZiB3ZSd2ZSBhbHJlYWR5IGNyZWF0ZWQgYSBkb25lIHByb21pc2UgZm9yIHRoaXMgdHJhbnNhY3Rpb24uXG4gICAgaWYgKHRyYW5zYWN0aW9uRG9uZU1hcC5oYXModHgpKVxuICAgICAgICByZXR1cm47XG4gICAgY29uc3QgZG9uZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY29uc3QgdW5saXN0ZW4gPSAoKSA9PiB7XG4gICAgICAgICAgICB0eC5yZW1vdmVFdmVudExpc3RlbmVyKCdjb21wbGV0ZScsIGNvbXBsZXRlKTtcbiAgICAgICAgICAgIHR4LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgICAgICAgdHgucmVtb3ZlRXZlbnRMaXN0ZW5lcignYWJvcnQnLCBlcnJvcik7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgdW5saXN0ZW4oKTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgZXJyb3IgPSAoKSA9PiB7XG4gICAgICAgICAgICByZWplY3QodHguZXJyb3IgfHwgbmV3IERPTUV4Y2VwdGlvbignQWJvcnRFcnJvcicsICdBYm9ydEVycm9yJykpO1xuICAgICAgICAgICAgdW5saXN0ZW4oKTtcbiAgICAgICAgfTtcbiAgICAgICAgdHguYWRkRXZlbnRMaXN0ZW5lcignY29tcGxldGUnLCBjb21wbGV0ZSk7XG4gICAgICAgIHR4LmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgICB0eC5hZGRFdmVudExpc3RlbmVyKCdhYm9ydCcsIGVycm9yKTtcbiAgICB9KTtcbiAgICAvLyBDYWNoZSBpdCBmb3IgbGF0ZXIgcmV0cmlldmFsLlxuICAgIHRyYW5zYWN0aW9uRG9uZU1hcC5zZXQodHgsIGRvbmUpO1xufVxubGV0IGlkYlByb3h5VHJhcHMgPSB7XG4gICAgZ2V0KHRhcmdldCwgcHJvcCwgcmVjZWl2ZXIpIHtcbiAgICAgICAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIElEQlRyYW5zYWN0aW9uKSB7XG4gICAgICAgICAgICAvLyBTcGVjaWFsIGhhbmRsaW5nIGZvciB0cmFuc2FjdGlvbi5kb25lLlxuICAgICAgICAgICAgaWYgKHByb3AgPT09ICdkb25lJylcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJhbnNhY3Rpb25Eb25lTWFwLmdldCh0YXJnZXQpO1xuICAgICAgICAgICAgLy8gUG9seWZpbGwgZm9yIG9iamVjdFN0b3JlTmFtZXMgYmVjYXVzZSBvZiBFZGdlLlxuICAgICAgICAgICAgaWYgKHByb3AgPT09ICdvYmplY3RTdG9yZU5hbWVzJykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQub2JqZWN0U3RvcmVOYW1lcyB8fCB0cmFuc2FjdGlvblN0b3JlTmFtZXNNYXAuZ2V0KHRhcmdldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBNYWtlIHR4LnN0b3JlIHJldHVybiB0aGUgb25seSBzdG9yZSBpbiB0aGUgdHJhbnNhY3Rpb24sIG9yIHVuZGVmaW5lZCBpZiB0aGVyZSBhcmUgbWFueS5cbiAgICAgICAgICAgIGlmIChwcm9wID09PSAnc3RvcmUnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlY2VpdmVyLm9iamVjdFN0b3JlTmFtZXNbMV1cbiAgICAgICAgICAgICAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgOiByZWNlaXZlci5vYmplY3RTdG9yZShyZWNlaXZlci5vYmplY3RTdG9yZU5hbWVzWzBdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBFbHNlIHRyYW5zZm9ybSB3aGF0ZXZlciB3ZSBnZXQgYmFjay5cbiAgICAgICAgcmV0dXJuIHdyYXAodGFyZ2V0W3Byb3BdKTtcbiAgICB9LFxuICAgIHNldCh0YXJnZXQsIHByb3AsIHZhbHVlKSB7XG4gICAgICAgIHRhcmdldFtwcm9wXSA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuICAgIGhhcyh0YXJnZXQsIHByb3ApIHtcbiAgICAgICAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIElEQlRyYW5zYWN0aW9uICYmXG4gICAgICAgICAgICAocHJvcCA9PT0gJ2RvbmUnIHx8IHByb3AgPT09ICdzdG9yZScpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJvcCBpbiB0YXJnZXQ7XG4gICAgfSxcbn07XG5mdW5jdGlvbiByZXBsYWNlVHJhcHMoY2FsbGJhY2spIHtcbiAgICBpZGJQcm94eVRyYXBzID0gY2FsbGJhY2soaWRiUHJveHlUcmFwcyk7XG59XG5mdW5jdGlvbiB3cmFwRnVuY3Rpb24oZnVuYykge1xuICAgIC8vIER1ZSB0byBleHBlY3RlZCBvYmplY3QgZXF1YWxpdHkgKHdoaWNoIGlzIGVuZm9yY2VkIGJ5IHRoZSBjYWNoaW5nIGluIGB3cmFwYCksIHdlXG4gICAgLy8gb25seSBjcmVhdGUgb25lIG5ldyBmdW5jIHBlciBmdW5jLlxuICAgIC8vIEVkZ2UgZG9lc24ndCBzdXBwb3J0IG9iamVjdFN0b3JlTmFtZXMgKGJvb28pLCBzbyB3ZSBwb2x5ZmlsbCBpdCBoZXJlLlxuICAgIGlmIChmdW5jID09PSBJREJEYXRhYmFzZS5wcm90b3R5cGUudHJhbnNhY3Rpb24gJiZcbiAgICAgICAgISgnb2JqZWN0U3RvcmVOYW1lcycgaW4gSURCVHJhbnNhY3Rpb24ucHJvdG90eXBlKSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHN0b3JlTmFtZXMsIC4uLmFyZ3MpIHtcbiAgICAgICAgICAgIGNvbnN0IHR4ID0gZnVuYy5jYWxsKHVud3JhcCh0aGlzKSwgc3RvcmVOYW1lcywgLi4uYXJncyk7XG4gICAgICAgICAgICB0cmFuc2FjdGlvblN0b3JlTmFtZXNNYXAuc2V0KHR4LCBzdG9yZU5hbWVzLnNvcnQgPyBzdG9yZU5hbWVzLnNvcnQoKSA6IFtzdG9yZU5hbWVzXSk7XG4gICAgICAgICAgICByZXR1cm4gd3JhcCh0eCk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIC8vIEN1cnNvciBtZXRob2RzIGFyZSBzcGVjaWFsLCBhcyB0aGUgYmVoYXZpb3VyIGlzIGEgbGl0dGxlIG1vcmUgZGlmZmVyZW50IHRvIHN0YW5kYXJkIElEQi4gSW5cbiAgICAvLyBJREIsIHlvdSBhZHZhbmNlIHRoZSBjdXJzb3IgYW5kIHdhaXQgZm9yIGEgbmV3ICdzdWNjZXNzJyBvbiB0aGUgSURCUmVxdWVzdCB0aGF0IGdhdmUgeW91IHRoZVxuICAgIC8vIGN1cnNvci4gSXQncyBraW5kYSBsaWtlIGEgcHJvbWlzZSB0aGF0IGNhbiByZXNvbHZlIHdpdGggbWFueSB2YWx1ZXMuIFRoYXQgZG9lc24ndCBtYWtlIHNlbnNlXG4gICAgLy8gd2l0aCByZWFsIHByb21pc2VzLCBzbyBlYWNoIGFkdmFuY2UgbWV0aG9kcyByZXR1cm5zIGEgbmV3IHByb21pc2UgZm9yIHRoZSBjdXJzb3Igb2JqZWN0LCBvclxuICAgIC8vIHVuZGVmaW5lZCBpZiB0aGUgZW5kIG9mIHRoZSBjdXJzb3IgaGFzIGJlZW4gcmVhY2hlZC5cbiAgICBpZiAoZ2V0Q3Vyc29yQWR2YW5jZU1ldGhvZHMoKS5pbmNsdWRlcyhmdW5jKSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICAgICAgICAgIC8vIENhbGxpbmcgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uIHdpdGggdGhlIHByb3h5IGFzICd0aGlzJyBjYXVzZXMgSUxMRUdBTCBJTlZPQ0FUSU9OLCBzbyB3ZSB1c2VcbiAgICAgICAgICAgIC8vIHRoZSBvcmlnaW5hbCBvYmplY3QuXG4gICAgICAgICAgICBmdW5jLmFwcGx5KHVud3JhcCh0aGlzKSwgYXJncyk7XG4gICAgICAgICAgICByZXR1cm4gd3JhcChjdXJzb3JSZXF1ZXN0TWFwLmdldCh0aGlzKSk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgICAgICAvLyBDYWxsaW5nIHRoZSBvcmlnaW5hbCBmdW5jdGlvbiB3aXRoIHRoZSBwcm94eSBhcyAndGhpcycgY2F1c2VzIElMTEVHQUwgSU5WT0NBVElPTiwgc28gd2UgdXNlXG4gICAgICAgIC8vIHRoZSBvcmlnaW5hbCBvYmplY3QuXG4gICAgICAgIHJldHVybiB3cmFwKGZ1bmMuYXBwbHkodW53cmFwKHRoaXMpLCBhcmdzKSk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIHRyYW5zZm9ybUNhY2hhYmxlVmFsdWUodmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKVxuICAgICAgICByZXR1cm4gd3JhcEZ1bmN0aW9uKHZhbHVlKTtcbiAgICAvLyBUaGlzIGRvZXNuJ3QgcmV0dXJuLCBpdCBqdXN0IGNyZWF0ZXMgYSAnZG9uZScgcHJvbWlzZSBmb3IgdGhlIHRyYW5zYWN0aW9uLFxuICAgIC8vIHdoaWNoIGlzIGxhdGVyIHJldHVybmVkIGZvciB0cmFuc2FjdGlvbi5kb25lIChzZWUgaWRiT2JqZWN0SGFuZGxlcikuXG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgSURCVHJhbnNhY3Rpb24pXG4gICAgICAgIGNhY2hlRG9uZVByb21pc2VGb3JUcmFuc2FjdGlvbih2YWx1ZSk7XG4gICAgaWYgKGluc3RhbmNlT2ZBbnkodmFsdWUsIGdldElkYlByb3h5YWJsZVR5cGVzKCkpKVxuICAgICAgICByZXR1cm4gbmV3IFByb3h5KHZhbHVlLCBpZGJQcm94eVRyYXBzKTtcbiAgICAvLyBSZXR1cm4gdGhlIHNhbWUgdmFsdWUgYmFjayBpZiB3ZSdyZSBub3QgZ29pbmcgdG8gdHJhbnNmb3JtIGl0LlxuICAgIHJldHVybiB2YWx1ZTtcbn1cbmZ1bmN0aW9uIHdyYXAodmFsdWUpIHtcbiAgICAvLyBXZSBzb21ldGltZXMgZ2VuZXJhdGUgbXVsdGlwbGUgcHJvbWlzZXMgZnJvbSBhIHNpbmdsZSBJREJSZXF1ZXN0IChlZyB3aGVuIGN1cnNvcmluZyksIGJlY2F1c2VcbiAgICAvLyBJREIgaXMgd2VpcmQgYW5kIGEgc2luZ2xlIElEQlJlcXVlc3QgY2FuIHlpZWxkIG1hbnkgcmVzcG9uc2VzLCBzbyB0aGVzZSBjYW4ndCBiZSBjYWNoZWQuXG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgSURCUmVxdWVzdClcbiAgICAgICAgcmV0dXJuIHByb21pc2lmeVJlcXVlc3QodmFsdWUpO1xuICAgIC8vIElmIHdlJ3ZlIGFscmVhZHkgdHJhbnNmb3JtZWQgdGhpcyB2YWx1ZSBiZWZvcmUsIHJldXNlIHRoZSB0cmFuc2Zvcm1lZCB2YWx1ZS5cbiAgICAvLyBUaGlzIGlzIGZhc3RlciwgYnV0IGl0IGFsc28gcHJvdmlkZXMgb2JqZWN0IGVxdWFsaXR5LlxuICAgIGlmICh0cmFuc2Zvcm1DYWNoZS5oYXModmFsdWUpKVxuICAgICAgICByZXR1cm4gdHJhbnNmb3JtQ2FjaGUuZ2V0KHZhbHVlKTtcbiAgICBjb25zdCBuZXdWYWx1ZSA9IHRyYW5zZm9ybUNhY2hhYmxlVmFsdWUodmFsdWUpO1xuICAgIC8vIE5vdCBhbGwgdHlwZXMgYXJlIHRyYW5zZm9ybWVkLlxuICAgIC8vIFRoZXNlIG1heSBiZSBwcmltaXRpdmUgdHlwZXMsIHNvIHRoZXkgY2FuJ3QgYmUgV2Vha01hcCBrZXlzLlxuICAgIGlmIChuZXdWYWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgdHJhbnNmb3JtQ2FjaGUuc2V0KHZhbHVlLCBuZXdWYWx1ZSk7XG4gICAgICAgIHJldmVyc2VUcmFuc2Zvcm1DYWNoZS5zZXQobmV3VmFsdWUsIHZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ld1ZhbHVlO1xufVxuY29uc3QgdW53cmFwID0gKHZhbHVlKSA9PiByZXZlcnNlVHJhbnNmb3JtQ2FjaGUuZ2V0KHZhbHVlKTtcblxuZXhwb3J0IHsgcmV2ZXJzZVRyYW5zZm9ybUNhY2hlIGFzIGEsIGluc3RhbmNlT2ZBbnkgYXMgaSwgcmVwbGFjZVRyYXBzIGFzIHIsIHVud3JhcCBhcyB1LCB3cmFwIGFzIHcgfTtcbiJdLCJuYW1lcyI6WyJpbnN0YW5jZU9mQW55Iiwib2JqZWN0IiwiY29uc3RydWN0b3JzIiwic29tZSIsImMiLCJpZGJQcm94eWFibGVUeXBlcyIsImN1cnNvckFkdmFuY2VNZXRob2RzIiwiZ2V0SWRiUHJveHlhYmxlVHlwZXMiLCJJREJEYXRhYmFzZSIsIklEQk9iamVjdFN0b3JlIiwiSURCSW5kZXgiLCJJREJDdXJzb3IiLCJJREJUcmFuc2FjdGlvbiIsImdldEN1cnNvckFkdmFuY2VNZXRob2RzIiwicHJvdG90eXBlIiwiYWR2YW5jZSIsImNvbnRpbnVlIiwiY29udGludWVQcmltYXJ5S2V5IiwiY3Vyc29yUmVxdWVzdE1hcCIsIldlYWtNYXAiLCJ0cmFuc2FjdGlvbkRvbmVNYXAiLCJ0cmFuc2FjdGlvblN0b3JlTmFtZXNNYXAiLCJ0cmFuc2Zvcm1DYWNoZSIsInJldmVyc2VUcmFuc2Zvcm1DYWNoZSIsInByb21pc2lmeVJlcXVlc3QiLCJyZXF1ZXN0IiwicHJvbWlzZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwidW5saXN0ZW4iLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic3VjY2VzcyIsImVycm9yIiwid3JhcCIsInJlc3VsdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0aGVuIiwidmFsdWUiLCJzZXQiLCJjYXRjaCIsImNhY2hlRG9uZVByb21pc2VGb3JUcmFuc2FjdGlvbiIsInR4IiwiaGFzIiwiZG9uZSIsImNvbXBsZXRlIiwiRE9NRXhjZXB0aW9uIiwiaWRiUHJveHlUcmFwcyIsImdldCIsInRhcmdldCIsInByb3AiLCJyZWNlaXZlciIsIm9iamVjdFN0b3JlTmFtZXMiLCJ1bmRlZmluZWQiLCJvYmplY3RTdG9yZSIsInJlcGxhY2VUcmFwcyIsImNhbGxiYWNrIiwid3JhcEZ1bmN0aW9uIiwiZnVuYyIsInRyYW5zYWN0aW9uIiwic3RvcmVOYW1lcyIsImFyZ3MiLCJjYWxsIiwidW53cmFwIiwic29ydCIsImluY2x1ZGVzIiwiYXBwbHkiLCJ0cmFuc2Zvcm1DYWNoYWJsZVZhbHVlIiwiUHJveHkiLCJJREJSZXF1ZXN0IiwibmV3VmFsdWUiLCJhIiwiaSIsInIiLCJ1IiwidyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/idb/build/wrap-idb-value.js\n");

/***/ })

};
;