(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("org_tensorflow_tensorboard/tensorboard/components/tf_ng_tensorboard/types/api", ["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /* Copyright 2019 The TensorFlow Authors. All Rights Reserved.
    
    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
    
        http://www.apache.org/licenses/LICENSE-2.0
    
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
    ==============================================================================*/
    var ActiveDashboardsLoadState;
    (function (ActiveDashboardsLoadState) {
        ActiveDashboardsLoadState[ActiveDashboardsLoadState["NOT_LOADED"] = 0] = "NOT_LOADED";
        ActiveDashboardsLoadState[ActiveDashboardsLoadState["LOADED"] = 1] = "LOADED";
        ActiveDashboardsLoadState[ActiveDashboardsLoadState["FAILED"] = 2] = "FAILED";
    })(ActiveDashboardsLoadState = exports.ActiveDashboardsLoadState || (exports.ActiveDashboardsLoadState = {}));
    var LoadingMechanismType;
    (function (LoadingMechanismType) {
        LoadingMechanismType["CUSTOM_ELEMENT"] = "CUSTOM_ELEMENT";
        LoadingMechanismType["IFRAME"] = "IFRAME";
        LoadingMechanismType["NONE"] = "NONE";
    })(LoadingMechanismType = exports.LoadingMechanismType || (exports.LoadingMechanismType = {}));
});
