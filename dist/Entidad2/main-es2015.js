(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/add-transaction/add-transaction.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/add-transaction/add-transaction.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" style=\"padding-top: 10px;\">\n\n    <h5 class=\"text-center\" style=\"color:red;\">¡ Atención, la nueva clave puede no aparecer. Recargar hasta que\n        aparezca !</h5>\n    <div class=\"text-center\">\n        <button mdbBtn (click)=\"reload()\" class=\"btn green accent-2\">Obtener Clave</button>\n    </div>\n    <hr>\n    <!-- Formulario de cambio de datos personales-->\n    <form [formGroup]=\"addTrans\" (ngSubmit)=\"crear()\">\n        <div class=\"modal-body\">\n            <p class=\"h2-responsive text-center\">Crear envío</p>\n            <hr>\n\n            <!-- Formulario de cambio de nombre y/o correo -->\n            <div class=\"md-form\">\n                <i class=\"fa fa-user prefix grey-text\"></i>\n                <input type=\"text\" id=\"channel\" placeholder=\"Channel\" class=\"form-control form-control-sm\"\n                    formControlName=\"channel\">\n            </div>\n\n            <div class=\"md-form\">\n                <i class=\"fa fa-user prefix grey-text\"></i>\n                <input type=\"text\" id=\"key\" placeholder=\"Key*\" class=\"form-control form-control-sm\"\n                    formControlName=\"key\">\n            </div>\n\n            <div class=\"md-form\">\n                <i class=\"fa fa-align-left prefix grey-text\"></i>\n                <input type=\"text\" id=\"producto\" placeholder=\"Producto\" class=\"form-control form-control-sm\"\n                    formControlName=\"producto\">\n            </div>\n\n            <div class=\"md-form\">\n                <i class=\"fa fa-align-left prefix grey-text\"></i>\n                <input type=\"text\" id=\"modelo\" placeholder=\"Modelo\" class=\"form-control form-control-sm\"\n                    formControlName=\"modelo\">\n            </div>\n\n            <div class=\"md-form\">\n                <i class=\"fa fa-align-left prefix grey-text\"></i>\n                <input type=\"text\" id=\"tipo\" placeholder=\"Tipo\" class=\"form-control form-control-sm\"\n                    formControlName=\"tipo\">\n            </div>\n\n            <div class=\"md-form\">\n                <i class=\"fa fa-calculator prefix grey-text\"></i>\n                <input type=\"text\" id=\"dimensiones\" placeholder=\"Dimensiones\" class=\"form-control form-control-sm\"\n                    formControlName=\"dimensiones\">\n            </div>\n\n            <div class=\"md-form\">\n                <i class=\"fa fa-calendar prefix grey-text\"></i>\n                <input type=\"text\" id=\"fecha_fab\" placeholder=\"Fecha Fabricación\" class=\"form-control form-control-sm\"\n                    formControlName=\"fecha_fab\">\n                <!-- Errores de validación -->\n                <div *ngIf=\"addTrans.controls['fecha_fab'].errors?.pattern\" class=\"form-control-feedback\">\n                    El formato de fecha no es correcto: DD-MM-YYYY\n                </div>\n            </div>\n\n            <div class=\"md-form\">\n                <i class=\"fa fa-list prefix grey-text\"></i>\n                <input type=\"text\" id=\"materiales\" placeholder=\"Materiales\" class=\"form-control form-control-sm\"\n                    formControlName=\"materiales\">\n            </div>\n\n            <div class=\"md-form\">\n                <i class=\"fa fa-align-left prefix grey-text\"></i>\n                <input type=\"text\" id=\"descripcion\" placeholder=\"Descripción\" class=\"form-control form-control-sm\"\n                    formControlName=\"descripcion\">\n            </div>\n\n            <div class=\"md-form\">\n                <i class=\"fa fa-calculator prefix grey-text\"></i>\n                <input type=\"text\" id=\"cantidad\" placeholder=\"Cantidad\" class=\"form-control form-control-sm\"\n                    formControlName=\"cantidad\">\n            </div>\n\n            <div class=\"md-form\">\n                <i class=\"fa fa-calculator prefix grey-text\"></i>\n                <input type=\"text\" id=\"precio_ud\" placeholder=\"Precio unidad\" class=\"form-control form-control-sm\"\n                    formControlName=\"precio_ud\">\n            </div>\n\n            <div class=\"md-form\">\n                <i class=\"fa fa-calculator prefix grey-text\"></i>\n                <input type=\"text\" id=\"precio_tot\" placeholder=\"Precio total\" class=\"form-control form-control-sm\"\n                    formControlName=\"precio_tot\">\n            </div>\n\n            <div class=\"md-form\">\n                <i class=\"fa fa-user prefix grey-text\"></i>\n                <input type=\"text\" id=\"origen\" placeholder=\"Origen\" class=\"form-control form-control-sm\"\n                    formControlName=\"origen\">\n            </div>\n\n            <div class=\"md-form\">\n                <i class=\"fa fa-user prefix grey-text\"></i>\n                <input type=\"text\" id=\"dst\" placeholder=\"Destino*\" class=\"form-control form-control-sm\"\n                    formControlName=\"dst\">\n            </div>\n\n            <div class=\"md-form\">\n                <i class=\"fa fa-user prefix grey-text\"></i>\n                <input type=\"text\" id=\"ordenante\" placeholder=\"Ordenante\" class=\"form-control form-control-sm\"\n                    formControlName=\"ordenante\">\n            </div>\n\n            <div class=\"md-form\">\n                <i class=\"fa fa-calendar prefix grey-text\"></i>\n                <input type=\"text\" id=\"fecha_env\" placeholder=\"Fecha envio\" class=\"form-control form-control-sm\"\n                    formControlName=\"fecha_env\">\n                <!-- Errores de validación -->\n                <div *ngIf=\"addTrans.controls['fecha_env'].errors?.pattern\" class=\"form-control-feedback\">\n                    El formato de fecha no es correcto: DD-MM-YYYY\n                </div>\n            </div>\n            <!-- Mensajes de confirmación/error -->\n            <div class=\"green-text\" *ngIf=\"submitOk\">\n                Los cambios se han guardado correctamente.\n            </div>\n            <div class=\"red-text\" *ngIf=\"!submitOk && submitOk != null\">\n                Se ha producido un error. Inténtelo de nuevo.\n            </div>\n\n            <p>* Campo obligatorio</p>\n\n            <div class=\"text-center mb-10\">\n                <button [disabled]=\"!addTrans.valid\" class=\"btn btn-unique waves-light \" type=\"submit\"\n                    mdbWavesEffect>Crear\n                    <i class=\"fa fa-paper-plane-o ml-1\"></i>\n                </button>\n            </div>\n        </div>\n    </form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/editar-transaccion/editar-transaccion.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/editar-transaccion/editar-transaccion.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" style=\"padding-top: 10px;\">\n\n    <p class=\"h2-responsive text-center\">Modificar transacción</p>\n    <hr>\n\n    <h5 class=\"text-center\" style=\"color:red;\">¡ Atención, la información puede no aparecer. Recargar hasta que aparezca\n        !</h5>\n    <div class=\"text-center\">\n        <button mdbBtn (click)=\"reload()\" class=\"btn green accent-2\">Recargar</button>\n    </div>\n    <hr>\n    <!-- Formulario de cambio de datos personales-->\n    <form [formGroup]=\"editTrans\" (ngSubmit)=\"editar()\">\n        <div class=\"modal-body\">\n            <!-- Formulario de cambio de nombre y/o correo -->\n            <div class=\"md-form\">\n                <i class=\"fa fa-user prefix grey-text\"></i>\n                <input type=\"text\" id=\"channel\" placeholder=\"Channel\" class=\"form-control form-control-sm\"\n                    formControlName=\"channel\">\n            </div>\n\n            <div class=\"md-form\">\n                <i class=\"fa fa-user prefix grey-text\"></i>\n                <input type=\"text\" id=\"key\" placeholder=\"Key\" class=\"form-control form-control-sm\"\n                    formControlName=\"key\">\n            </div>\n\n            <div class=\"md-form\">\n                <i class=\"fa fa-align-left prefix grey-text\"></i>\n                <input type=\"text\" id=\"producto\" placeholder=\"Producto\" class=\"form-control form-control-sm\"\n                    formControlName=\"producto\">\n            </div>\n\n            <div class=\"md-form\">\n                <i class=\"fa fa-align-left prefix grey-text\"></i>\n                <input type=\"text\" id=\"modelo\" placeholder=\"Modelo\" class=\"form-control form-control-sm\"\n                    formControlName=\"modelo\">\n            </div>\n\n            <div class=\"md-form\">\n                <i class=\"fa fa-align-left prefix grey-text\"></i>\n                <input type=\"text\" id=\"tipo\" placeholder=\"Tipo\" class=\"form-control form-control-sm\"\n                    formControlName=\"tipo\">\n            </div>\n\n            <div class=\"md-form\">\n                <i class=\"fa fa-calculator prefix grey-text\"></i>\n                <input type=\"text\" id=\"dimensiones\" placeholder=\"Dimensiones\" class=\"form-control form-control-sm\"\n                    formControlName=\"dimensiones\">\n            </div>\n\n            <div class=\"md-form\">\n                <i class=\"fa fa-calendar prefix grey-text\"></i>\n                <input type=\"text\" id=\"fecha_fab\" placeholder=\"Fecha Fabricación\" class=\"form-control form-control-sm\"\n                    formControlName=\"fecha_fab\">\n                <!-- Errores de validación -->\n                <div *ngIf=\"editTrans.controls['fecha_fab'].errors?.pattern\" class=\"form-control-feedback\">\n                    El formato de fecha no es correcto: DD-MM-YYYY\n                </div>\n            </div>\n\n            <div class=\"md-form\">\n                <i class=\"fa fa-list prefix grey-text\"></i>\n                <input type=\"text\" id=\"materiales\" placeholder=\"Materiales\" class=\"form-control form-control-sm\"\n                    formControlName=\"materiales\">\n            </div>\n\n            <div class=\"md-form\">\n                <i class=\"fa fa-align-left prefix grey-text\"></i>\n                <input type=\"text\" id=\"descripcion\" placeholder=\"Descripción\" class=\"form-control form-control-sm\"\n                    formControlName=\"descripcion\">\n            </div>\n\n            <div class=\"md-form\">\n                <i class=\"fa fa-calculator prefix grey-text\"></i>\n                <input type=\"text\" id=\"cantidad\" placeholder=\"Cantidad\" class=\"form-control form-control-sm\"\n                    formControlName=\"cantidad\">\n            </div>\n\n            <div class=\"md-form\">\n                <i class=\"fa fa-calculator prefix grey-text\"></i>\n                <input type=\"text\" id=\"precio_ud\" placeholder=\"Precio unidad\" class=\"form-control form-control-sm\"\n                    formControlName=\"precio_ud\">\n            </div>\n\n            <div class=\"md-form\">\n                <i class=\"fa fa-calculator prefix grey-text\"></i>\n                <input type=\"text\" id=\"precio_tot\" placeholder=\"Precio total\" class=\"form-control form-control-sm\"\n                    formControlName=\"precio_tot\">\n            </div>\n\n            <div class=\"md-form\">\n                <i class=\"fa fa-user prefix grey-text\"></i>\n                <input type=\"text\" id=\"origen\" placeholder=\"Origen\" class=\"form-control form-control-sm\"\n                    formControlName=\"origen\">\n            </div>\n\n            <div class=\"md-form\">\n                <i class=\"fa fa-user prefix grey-text\"></i>\n                <input type=\"text\" id=\"dst\" placeholder=\"Destino\" class=\"form-control form-control-sm\"\n                    formControlName=\"dst\">\n            </div>\n\n            <div class=\"md-form\">\n                <i class=\"fa fa-user prefix grey-text\"></i>\n                <input type=\"text\" id=\"ordenante\" placeholder=\"Ordenante\" class=\"form-control form-control-sm\"\n                    formControlName=\"ordenante\">\n            </div>\n\n            <div class=\"md-form\">\n                <i class=\"fa fa-calendar prefix grey-text\"></i>\n                <input type=\"text\" id=\"fecha_env\" placeholder=\"Fecha envio\" class=\"form-control form-control-sm\"\n                    formControlName=\"fecha_env\">\n                <!-- Errores de validación -->\n                <div *ngIf=\"editTrans.controls['fecha_env'].errors?.pattern\" class=\"form-control-feedback\">\n                    El formato de fecha no es correcto: DD-MM-YYYY\n                </div>\n            </div>\n            <!-- Mensajes de confirmación/error -->\n            <div class=\"green-text\" *ngIf=\"submitOk\">\n                Los cambios se han guardado correctamente.\n            </div>\n            <div class=\"red-text\" *ngIf=\"!submitOk && submitOk != null\">\n                Se ha producido un error. Inténtelo de nuevo.\n            </div>\n\n            <div class=\"text-center mb-10\">\n                <button [disabled]=\"!editTrans.valid\" class=\"btn btn-unique waves-light \" type=\"submit\"\n                    mdbWavesEffect>Modificar\n                    <i class=\"fa fa-paper-plane-o ml-1\"></i>\n                </button>\n            </div>\n        </div>\n    </form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/editar-usuario/editar-usuario.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/editar-usuario/editar-usuario.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" style=\"padding-top: 10px;\">\n\n    <!-- Formulario de cambio de datos personales-->\n    <form [formGroup]=\"cambioDatos\" (ngSubmit)=\"editarInfo()\">\n      <div class=\"modal-body\">\n        <p class=\"h2-responsive text-center\">Modificar información del usuario</p>\n        <hr>\n  \n        <!-- Formulario de cambio de nombre y/o correo -->\n        <div class=\"md-form\">\n          <i class=\"fa fa-user prefix grey-text\"></i>\n          <input type=\"text\" id=\"nombre\" class=\"form-control form-control-sm\" formControlName=\"nombre\">\n          <!-- Errores de validación -->\n          <div *ngIf=\"cambioDatos.controls['nombre'].errors?.minlength\" class=\"form-control-feedback\">\n            Longitud mínima necesaria {{ cambioDatos.controls['nombre'].errors.minlength.requiredLength }}.\n          </div>\n          <div *ngIf=\"cambioDatos.controls['nombre'].errors?.novacio && !cambioDatos.controls['nombre'].pristine\" class=\"form-control-feedback\">\n            El campo no puede estar vacío.\n          </div>\n        </div>\n  \n        <div class=\"md-form\">\n          <i class=\"fa fa-envelope prefix grey-text\"></i>\n          <input type=\"email\" id=\"correo\" class=\"form-control form-control-sm\" formControlName=\"correo\">\n          <!-- Errores de validación -->\n          <div *ngIf=\"cambioDatos.controls['correo'].errors?.novacio && !cambioDatos.controls['correo'].pristine\" class=\"form-control-feedback\">\n            El correo no puede estar vacío.\n          </div>\n          <div *ngIf=\"cambioDatos.controls['correo'].errors?.pattern\" class=\"form-control-feedback\">\n            El formato no es correcto.\n          </div>\n        </div>\n  \n        <!-- Desplegable para cambiar permisos de usuario -->\n        <div class=\"md-form\">\n          <i class=\"fa fa-lock prefix grey-text\"></i>\n          <div class=\"md-form\" style=\"padding-left: 30px;\">\n            <select class=\"form-control\" id=\"selectp\" formControlName=\"permisos\">\n              <option [selected]=\"usuario.permisos == 'admin'\" value=\"admin\"> Admin </option>\n              <option [selected]=\"usuario.permisos != 'admin'\" value=\"usuario\"> Usuario </option>\n            </select>\n          </div>\n        </div>\n        <!-- Mensajes de confirmación/error -->\n        <div class=\"green-text\" *ngIf=\"editok\">\n          Los cambios se han guardado correctamente.\n        </div>\n        <div class=\"red-text\" *ngIf=\"!editok && editok != null\">\n          Se ha producido un error en el servidor.\n        </div>\n  \n        <div class=\"text-center mb-10\">\n          <button [disabled]=\"!cambioDatos\" class=\"btn btn-unique waves-light rounded aqua-grad\" type=\"submit\" mdbWavesEffect>Modificar\n            <i class=\"fa fa-paper-plane-o ml-1\"></i>\n          </button>\n        </div>\n      </div>\n    </form>\n  </div>\n  \n  <!-- Formulario de cambio de contraseña-->\n  <div class=\"container\" style=\"padding-top: 40px;\">\n    <form [formGroup]=\"cambioPass\" (ngSubmit)=\"cambiarPassword()\">\n      <div class=\"modal-body\">\n        <p class=\"h2-responsive text-center\">Cambiar contraseña</p>\n        <hr>\n  \n        <div class=\"md-form\">\n          <i class=\"fa fa-lock prefix grey-text\"></i>\n          <input type=\"password\" id=\"nuevaPass\" formControlName=\"nuevaPass\" placeholder=\"Nueva contraseña\" class=\"form-control form-control-sm\">\n          <!-- Errores de validación -->\n          <div *ngIf=\"cambioPass.controls['nuevaPass'].errors?.pattern\" class=\"form-control-feedback\">\n            La contraseña debe contener al menos una minúscula, una mayúscula, un número, un carácter especial y una longitud de al menos\n            5 caracteres.\n          </div>\n          <div *ngIf=\"cambioPass.controls['nuevaPass'].errors?.novacio && !cambioPass.controls['nuevaPass'].pristine\" class=\"form-control-feedback\">\n            El campo no puede estar vacío.\n          </div>\n        </div>\n  \n        <div class=\"md-form\">\n          <i class=\"fa fa-lock prefix grey-text\"></i>\n          <input type=\"password\" id=\"rePass\" formControlName=\"rePass\" placeholder=\"Repita la contraseña\" class=\"form-control form-control-sm\">\n          <!-- Errores de validación -->\n          <div *ngIf=\"cambioPass.controls['rePass'].errors?.coinciden && !cambioPass.controls['rePass'].pristine\" class=\"form-control-feedback\">\n            Las contraseñas no coinciden.\n          </div>\n          <div *ngIf=\"cambioPass.controls['rePass'].errors?.novacio && !cambioPass.controls['rePass'].pristine\" class=\"form-control-feedback\">\n            El campo no puede estar vacío.\n          </div>\n        </div>\n        <!-- Mensajes de confirmación/error -->\n        <div class=\"green-text\" *ngIf=\"passok\">\n          Los cambios se han guardado correctamente.\n        </div>\n        <div class=\"red-text\" *ngIf=\"!passok && passok != null\">\n          Se ha producido un error en el servidor.\n        </div>\n  \n        <div class=\"text-center\">\n          <button [disabled]=\"!cambioPass.valid\" class=\"btn btn-unique waves-light rounded aqua-grad\" mdbWavesEffect>Cambiar\n            <i class=\"fa fa-paper-plane-o ml-1\"></i>\n          </button>\n        </div>\n      </div>\n    </form>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/eliminar-usuario/eliminar-usuario.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/eliminar-usuario/eliminar-usuario.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container pt-5\">\n    <mdb-card>\n      <mdb-card-header class=\"warning-color-dark white-text text-center\">\n        ELIMINAR USUARIO\n      </mdb-card-header>\n      <mdb-card-body>\n        <div class=\"text-center\">\n          <mdb-card-title>¿Está seguro de que desea eliminar al usuario?</mdb-card-title>\n          <mdb-card-text>Está a punto de borrar al usuario de forma permanente.</mdb-card-text>\n          <a mdbBtn color=\"secondary\" class=\"waves-light mt-2 rounded success-grad\" [routerLink]=\"['/panelAdmin']\" mdbWavesEffect>Volver</a>\n          <a mdbBtn (click)=\"eliminar()\" mdbBtn color=\"danger\" class=\"waves-light mt-2 rounded danger-grad\" mdbWavesEffect>Eliminar</a>\n        </div>\n      </mdb-card-body>\n    </mdb-card>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/home/home.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/home/home.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumbotron card card-image\" style=\"background-image: url(https://mdbootstrap.com/img/Photos/Others/gradient1.jpg);\">\n    <div class=\"text-white text-center py-5 px-4\">\n      <div>\n        <h2 class=\"card-title h1-responsive pt-3 mb-5 font-bold\" *ngIf=\"!sesionActiva()\"><strong>Bienvenido a la web de la Entidad2</strong></h2>\n        <h2 class=\"card-title h1-responsive pt-3 mb-5 font-bold\" *ngIf=\"sesionActiva()\"><strong>Bienvenido {{Nombre}}</strong></h2>\n        <p class=\"mx-5 mb-5\">En esta organización se desarrollan piezas que se utilizan para montar productos finales.\n        </p>\n        <a class=\"btn btn-light\" *ngIf=\"!sesionActiva()\" [routerLink]=\"['/login']\"> Inicia Sesión!</a>\n      </div>\n    </div>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/log/login/login.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/log/login/login.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--Modal: Login / Register Form-->\n\n<div class=\"modal-dialog cascading-modal mt-5\" role=\"document\">\n    <!--Content-->\n    <div class=\"modal-content\">\n\n        <!--Modal cascading tabs-->\n        <div class=\"modal-c-tabs\">\n\n            <!-- Nav tabs -->\n            <ul class=\"nav nav-tabs tabs-2 \" role=\"tablist\">\n                <li class=\"nav-item secondary-color accent-1\" routerLinkActive=\"active\">\n                    <a class=\"nav-link white-text\" style=\"width: 249px;\" [routerLink]=\"['/login']\" role=\"tab\">\n                        <i class=\"fa fa-user mr-1\"></i> Login</a>\n                </li>\n                <li class=\"nav-item warning-color-dark accent-3\" routerLinkActive=\"active\">\n                    <a class=\"nav-link white-text\" data-toggle=\"tab\" style=\"width:249px;\" [routerLink]=\"['/signup']\" role=\"tab\">\n                        <i class=\"fa fa-user-plus mr-1\"></i> Registro</a>\n                </li>\n            </ul>\n\n\n            <div class=\"tab-content\">\n                <!--Panel 7-->\n                <div class=\"tab-pane fade in show active\" id=\"panel7\" role=\"tabpanel\">\n\n                    <!--Formulario-->\n                    <form [formGroup]=\"forma\" (ngSubmit)=\"logearse()\">\n                        <div class=\"modal-body\">\n\n                            <div class=\"md-form form-sm mb-5\">\n                                <i class=\"fa fa-envelope prefix\"></i>\n                                <input type=\"email\" id=\"modalLRInput10\" class=\"form-control form-control-sm\" placeholder=\"Introduzca su email\" formControlName=\"email\">\n                                <!-- Errores de validación-->\n                                <div *ngIf=\"forma.controls['email'].errors?.novacio && !forma.controls['email'].pristine\" class=\"form-control-feedback\">\n                                    El campo no puede estar vacío.\n                                </div>\n                                <div *ngIf=\"forma.controls['email'].errors?.pattern\" class=\"form-control-feedback\">\n                                    El formato no es correcto.\n                                </div>\n                            </div>\n\n                            <div class=\"md-form form-sm mb-4\">\n                                <i class=\"fa fa-lock prefix\"></i>\n                                <input type=\"password\" id=\"modalLRInput11\" class=\"form-control form-control-sm validate\" placeholder=\"Introduzca su contraseña\"\n                                    formControlName=\"password\">\n                            </div>\n                            <!-- Errores de validación-->\n                            <div *ngIf=\"forma.controls['password'].errors?.novacio && !forma.controls['password'].pristine\" class=\"form-control-feedback\">\n                                El campo no puede estar vacío.\n                            </div>\n\n                            <div class=\"text-danger form-control-feedback\" *ngIf=\"!correcto\"> El correo o la contraseña son incorrectos.</div>\n                            <div class=\"text-center mt-2\">\n                                <button class=\"btn btn-success\" type=\"submit\" [disabled]=\"!forma.valid\">Log in\n                                    <i class=\"fa fa-sign-in ml-1\"></i>\n                                </button>\n                            </div>\n                        </div>\n                    </form>\n                    <!--Footer-->\n                    <div class=\"modal-footer\">\n                        <div class=\"options text-center text-md-right mt-1\">\n                            <p>¿No tiene cuenta?\n                                <a class=\"purple-text\" [routerLink]=\"['/signup']\">Regístrese</a>\n                            </p>\n                        </div>\n                    </div>\n                </div>\n                <!--/.Panel 7-->\n            </div>\n        </div>\n    </div>\n    <!--/.Content-->\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/log/signup/signup.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/log/signup/signup.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--Modal: Login / Register Form-->\n<div class=\"modal-dialog cascading-modal regist-top\" role=\"document\">\n    <!--Content-->\n    <div class=\"modal-content\">\n  \n      <!--Modal cascading tabs-->\n      <div class=\"modal-c-tabs\">\n  \n        <!-- Nav tabs -->\n        <ul class=\"nav nav-tabs tabs-2 \" role=\"tablist\">\n          <li class=\"nav-item secondary-color accent-1\" routerLinkActive=\"active\">\n            <a class=\"nav-link white-text\" style=\"width: 249px;\" [routerLink]=\"['/login']\" role=\"tab\">\n                <i class=\"fa fa-user mr-1\"></i> Login</a>\n        </li>\n        <li class=\"nav-item warning-color-dark accent-3\" routerLinkActive=\"active\">\n            <a class=\"nav-link white-text\" data-toggle=\"tab\" style=\"width:249px;\" [routerLink]=\"['/signup']\" role=\"tab\">\n                <i class=\"fa fa-user-plus mr-1\"></i> Registro</a>\n        </li>\n        </ul>\n  \n        <div class=\"tab-content\">\n          <!--Panel 8-->\n          <div class=\"tab-pane fade in show active\" id=\"panel8\" role=\"tabpanel\">\n  \n            <!--FORMULARIO -->\n            <form [formGroup]=\"forma\" (ngSubmit)=\"registrar()\">\n              <div class=\"modal-body\">\n  \n                <div class=\"md-form form-sm mb-5\">\n                  <i class=\"fa fa-user mr-1 prefix\"></i>\n                  <input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"Introduzca su nombre\" formControlName=\"nombre\">\n                  <!-- Errores de validación -->\n                  <div *ngIf=\"forma.controls['nombre'].errors?.minlength\" class=\"form-control-feedback\">\n                    Longitud mínima necesaria {{ forma.controls['nombre'].errors.minlength.requiredLength }}.\n                  </div>\n                  <div *ngIf=\"forma.controls['nombre'].errors?.novacio && !forma.controls['nombre'].pristine\" class=\"form-control-feedback\">\n                    El campo no puede estar vacío.\n                  </div>\n                </div>\n  \n                <div class=\"md-form form-sm mb-5\">\n                  <i class=\"fa fa-envelope prefix\"></i>\n                  <input type=\"email\" class=\"form-control form-control-sm\" id=\"email\" placeholder=\"Introduzca su email\" formControlName=\"email\">\n                  <!-- Errores de validación -->\n                  <div *ngIf=\"forma.controls['email'].errors?.pattern\" class=\"form-control-feedback\">\n                    El formato no es correcto.\n                  </div>\n                  <div *ngIf=\"forma.controls['email'].errors?.novacio && !forma.controls['email'].pristine\" class=\"form-control-feedback\">\n                    El campo no puede estar vacío.\n                  </div>\n                  <div *ngIf=\"forma.controls['email'].errors?.existeEmail && !forma.controls['email'].pristine\" class=\"form-control-feedback\">\n                    Ya existe una cuenta con esta dirección de correo electrónico.\n                  </div>\n                </div>\n  \n                <div class=\"md-form form-sm mb-5\">\n                  <i class=\"fa fa-lock prefix\"></i>\n                  <input type=\"password\" class=\"form-control form-control-sm\" placeholder=\"Contraseña\" formControlName=\"password\">\n                  <!-- Errores de validación -->\n                  <div *ngIf=\"forma.controls['password'].errors?.pattern\" class=\"form-control-feedback\">\n                    La contraseña debe contener al menos una minúscula, una mayúscula, un número, un carácter especial y una longitud de al menos 5 caracteres.\n                  </div>\n                  <div *ngIf=\"forma.controls['password'].errors?.novacio && !forma.controls['password'].pristine\" class=\"form-control-feedback\">\n                    El campo no puede estar vacío.\n                  </div>\n                </div>\n  \n                <div class=\"md-form form-sm mb-4\">\n                  <i class=\"fa fa-lock prefix\"></i>\n                  <input type=\"password\" class=\"form-control form-control-sm\" placeholder=\"Repita la contraseña\" formControlName=\"repassReg\">\n                  <!-- Errores de validación -->\n                  <div *ngIf=\"forma.controls['repassReg'].errors?.nocoindicen && !forma.controls['repassReg'].pristine\" class=\"form-control-feedback\">\n                    Las contraseñas no coinciden.\n                  </div>\n                  <div *ngIf=\"forma.controls['repassReg'].errors?.novacio && !forma.controls['repassReg'].pristine\" class=\"form-control-feedback\">\n                    El campo no puede estar vacío.\n                  </div>\n                </div>\n  \n                <div class=\"text-center form-sm mt-2\">\n                  <div class=\"form-control-feedback\">\n                    * Todos los campos son obligatorios.\n                  </div>\n                  <button class=\"btn btn-success\" type=\"submit\" [disabled]=\"!forma.valid\">Registrarse\n                    <i class=\"fa fa-sign-in ml-1\"></i>\n                  </button>\n                </div>\n  \n              </div>\n            </form>\n  \n            <!--Footer-->\n            <div class=\"modal-footer\">\n              <div class=\"options text-right\">\n                <p class=\"pt-1\">¿Ya tiene cuenta?\n                  <a [routerLink]=\"['/login']\" class=\"purple-text\">Inicie Sesión</a>\n                </p>\n              </div>\n            </div>\n          </div>\n          <!--/.Panel 8-->\n        </div>\n  \n      </div>\n    </div>\n    <!--/.Content-->\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/panel-administracion/panel-administracion.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/panel-administracion/panel-administracion.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container pt-3\">\n    <div class=\"card\">\n        <div class=\"card-body\">\n\n            <!-- Grid row -->\n            <div class=\"row\">\n\n                <!-- Grid column -->\n                <div class=\"col-md-12\">\n\n                    <div class=\"md-form\">\n                        <input type=\"search\" (keyup)=\"buscar()\" [(ngModel)]=\"searchText\" id=\"search\" class=\"form-control\" [mdbValidate]=\"false\"\n                            placeholder=\"Buscar usuario\">\n                        <div class=\"text-center\">\n                            <button mdbBtn (click)=\"todos()\" type=\"button\" color=\"warning\" class=\"waves-light rounded peach-grad\" mdbWavesEffect>Todos</button>\n                        </div>\n                    </div>\n\n                </div>\n                <!-- Grid column -->\n\n            </div>\n            <!-- Grid row -->\n\n            <!--Table-->\n            <div class=\"table-responsive\">\n                <table class=\"table table-striped\">\n\n                    <!--Table head-->\n                    <thead>\n                        <tr>\n                            <th>ID</th>\n                            <th>Nombre</th>\n                            <th>Correo</th>\n                            <th>Permisos</th>\n                            <th>Acciones</th>\n                        </tr>\n                    </thead>\n                    <!--Table head-->\n\n                    <!--Table body-->\n                    <tbody>\n                        <tr *ngFor=\"let user of usuarios \">\n                            <!-- Aquí va el ngFor-->\n                            <th scope=\"row\">{{ user.id }}</th>\n                            <td>{{ user.nombre }}</td>\n                            <td>{{ user.correo }}</td>\n                            <td>{{ user.permisos }} </td>\n                            <td>\n                                <a class=\"btn btn-unique waves-light rounded purple-grad\" [routerLink]=\"['/editar', user.id]\" mdbWavesEffect>Editar</a>\n                            </td>\n                            <td>\n                                <a class=\"btn btn-unique waves-light rounded danger-grad\" [routerLink]=\"['/eluser', user.id]\" mdbWavesEffect>Eliminar</a>\n                            </td>\n                        </tr>\n                    </tbody>\n                    <!--Table body-->\n                </table>\n                <!--Table-->\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/perfil/perfil.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/perfil/perfil.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" style=\"padding-top: 10px;\">\n\n    <!-- Formulario de cambio de datos personales-->\n    <form [formGroup]=\"cambioDatos\" (ngSubmit)=\"editarInfo()\">\n      <div class=\"modal-body\">\n        <p class=\"h2-responsive text-center\">Modificar información personal</p>\n        <hr>\n  \n        <div class=\"md-form\">\n          <i class=\"fa fa-user prefix grey-text\"></i>\n          <input type=\"text\" id=\"nombre\" class=\"form-control form-control-sm\" formControlName=\"nombre\">\n          <!-- Errores de validación -->\n          <div *ngIf=\"cambioDatos.controls['nombre'].errors?.minlength\" class=\"form-control-feedback\">\n            Longitud mínima necesaria {{ cambioDatos.controls['nombre'].errors.minlength.requiredLength }}.\n          </div>\n          <div *ngIf=\"cambioDatos.controls['nombre'].errors?.novacio && !cambioDatos.controls['nombre'].pristine\" class=\"form-control-feedback\">\n            El campo no puede estar vacío.\n          </div>\n        </div>\n  \n        <div class=\"md-form\">\n          <i class=\"fa fa-envelope prefix grey-text\"></i>\n          <input type=\"email\" id=\"correo\" class=\"form-control form-control-sm\" formControlName=\"correo\">\n          <!-- Errores de validación -->\n          <div *ngIf=\"cambioDatos.controls['correo'].errors?.novacio && !cambioDatos.controls['correo'].pristine\" class=\"form-control-feedback\">\n            El correo no puede estar vacío.\n          </div>\n          <div *ngIf=\"cambioDatos.controls['correo'].errors?.pattern\" class=\"form-control-feedback\">\n            El formato no es correcto.\n          </div>\n        </div>\n        <!-- Mensajes de confirmación/error -->\n        <div class=\"green-text\" *ngIf=\"editok\">\n          Los cambios se han guardado correctamente.\n        </div>\n        <div class=\"red-text\" *ngIf=\"!editok && editok != null\">\n          Se ha producido un error en el servidor.\n        </div>\n  \n        <div class=\"text-center mb-10\">\n          <button [disabled]=\"!cambioDatos.valid\" class=\"btn btn-purple waves-lighe\" type=\"submit\">Modificar\n            <i class=\"fa fa-paper-plane-o ml-1\"></i>\n          </button>\n        </div>\n      </div>\n    </form>\n  </div>\n  \n  <!-- Formulario de cambio de contraseña-->\n  <div class=\"container\" style=\"padding-top: 40px;\">\n    <form [formGroup]=\"cambioPass\" (ngSubmit)=\"cambiarPassword()\">\n      <div class=\"modal-body\">\n        <p class=\"h2-responsive text-center\">Cambiar contraseña</p>\n        <hr>\n  \n        <div class=\"md-form\">\n          <i class=\"fa fa-lock prefix grey-text\"></i>\n          <input type=\"password\" id=\"nuevaPass\" formControlName=\"nuevaPass\" placeholder=\"Nueva contraseña\" class=\"form-control form-control-sm\">\n          <!-- Errores de validación -->\n          <div *ngIf=\"cambioPass.controls['nuevaPass'].errors?.pattern\" class=\"form-control-feedback\">\n            La contraseña debe contener al menos una minúscula, una mayúscula, un número, un carácter especial y una longitud de al menos\n            5 caracteres.\n          </div>\n          <div *ngIf=\"cambioPass.controls['nuevaPass'].errors?.novacio && !cambioPass.controls['nuevaPass'].pristine\" class=\"form-control-feedback\">\n            El campo no puede estar vacío.\n          </div>\n        </div>\n  \n        <div class=\"md-form\">\n          <i class=\"fa fa-lock prefix grey-text\"></i>\n          <input type=\"password\" id=\"rePass\" formControlName=\"rePass\" placeholder=\"Repita la contraseña\" class=\"form-control form-control-sm\">\n          <!-- Errores de validación -->\n          <div *ngIf=\"cambioPass.controls['rePass'].errors?.coinciden && !cambioPass.controls['rePass'].pristine\" class=\"form-control-feedback\">\n            Las contraseñas no coinciden.\n          </div>\n          <div *ngIf=\"cambioPass.controls['rePass'].errors?.novacio && !cambioPass.controls['rePass'].pristine\" class=\"form-control-feedback\">\n            El campo no puede estar vacío.\n          </div>\n        </div>\n        <!-- Mensajes de confirmación/error -->\n        <div class=\"green-text\" *ngIf=\"passok\">\n          Los cambios se han guardado correctamente.\n        </div>\n        <div class=\"red-text\" *ngIf=\"!passok && passok != null\">\n          Se ha producido un error en el servidor.\n        </div>\n  \n        <div class=\"text-center\">\n          <button [disabled]=\"!cambioPass.valid\" class=\"btn btn-purple waves-light\" mdbWavesEffect>Cambiar\n            <i class=\"fa fa-paper-plane-o ml-1\"></i>\n          </button>\n        </div>\n      </div>\n    </form>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/shared/footer/footer.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/shared/footer/footer.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>footer works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/shared/navbar/navbar.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/shared/navbar/navbar.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--Navbar-->\n<nav class=\"navbar navbar-expand-lg navbar-dark secondary-color\">\n\n    <!-- Navbar brand -->\n    <logo>\n        <a class=\"navbar-brand\" [routerLink]=\"['/home']\">ENTIDAD 2</a>\n    </logo>\n\n    <!-- Collapsible content -->\n    <links>\n\n        <!-- Links -->\n        <ul class=\"navbar-nav mr-auto\">\n            <li class=\"nav-item active\" routerLinkActive=\"active\">\n                <a class=\"nav-link waves-light\" [routerLink]=\"['/home']\" mdbRippleRadius>Home</a>\n            </li>\n\n            <li class=\"nav-item\" routerLinkActive=\"active\">\n                <a *ngIf=\"sesionActiva()\" class=\"nav-link waves-light\" [routerLink]=\"['/world-state']\"\n                    mdbRippleRadius>Estado</a>\n            </li>\n\n            <li class=\"nav-item\" routerLinkActive=\"active\">\n                <a *ngIf=\"sesionActiva() && esAdmin()\" class=\"nav-link waves-light\" [routerLink]=\"['/addtrans']\"\n                    mdbRippleRadius>Nuevo Envío</a>\n            </li>\n\n            <li class=\"nav-item\" routerLinkActive=\"active\">\n                <a *ngIf=\"sesionActiva()\" class=\"nav-link waves-light\" [routerLink]=\"['/perfil']\"\n                    mdbRippleRadius>Perfil</a>\n            </li>\n\n            <li class=\"nav-item\" routerLinkActive=\"active\">\n                <a *ngIf=\"sesionActiva() && esAdmin()\" class=\"nav-link waves-light\" [routerLink]=\"['/panelAdmin']\"\n                    mdbRippleRadius>Panel de Administración</a>\n            </li>\n\n            <li class=\"nav-item\" routerLinkActive=\"active\">\n                <a *ngIf=\"!sesionActiva()\" class=\"nav-link waves-light\" [routerLink]=\"['/login']\"\n                    mdbRippleRadius>Iniciar Sesión</a>\n            </li>\n\n            <li class=\"nav-item\" routerLinkActive=\"active\">\n                <a *ngIf=\"sesionActiva()\" class=\"nav-link waves-light\" (click)=\"desconectarse()\"\n                    mdbRippleRadius>Desconectarse</a>\n            </li>\n        </ul>\n        <!-- Links -->\n    </links>\n    <!-- Collapsible content -->\n\n</nav>\n<!--/.Navbar-->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/trans-historial/trans-historial.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/trans-historial/trans-historial.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container pt-3\">\n    <div class=\"card\">\n        <div class=\"card-body\">\n\n            <h2> Historial de transacciones asociadas a la Tx {{ key }}</h2><hr>\n            <h5 class=\"text-center\" style=\"color:red;\">¡ Atención, las transacciones pueden no cargar. Recargar hasta que aparezcan !</h5>\n            <div class=\"text-center\">\n                <button mdbBtn (click)=\"queryHist()\" class=\"btn green accent-2\">Recargar</button>\n            </div><br>\n            <!--Table-->\n            <div class=\"table-responsive\">\n                <table class=\"table table-striped\">\n\n                    <!--Table head-->\n                    <thead>\n                        <tr>\n                            <th>IsDelete</th>\n                            <th>TimeStamp</th>\n                            <th>TxID</th>\n                            <th>Producto</th>\n                            <th>Modelo</th>\n                            <th>Tipo</th>\n                            <th>Dimensiones</th>\n                            <th>Fecha fabricación</th>\n                            <th>Materiales</th>\n                            <th>Descripción</th>\n                            <th>Cantidad</th>\n                            <th>Precio Ud</th>\n                            <th>Precio Total</th>\n                            <th>Origen</th>\n                            <th>Destino</th>\n                            <th>Ordenante</th>\n                            <th>Fecha envio</th>\n                        </tr>\n                    </thead>\n                    <!--Table head-->\n\n                    <!--Table body-->\n                    <tbody>\n                        <tr *ngFor=\"let transac of historial\">\n                            <!-- Aquí va el ngFor-->\n                            <td scope=\"row\">{{ transac.IsDelete }}</td>\n                            <td>{{ transac.Timestamp }}</td>\n                            <td>{{ transac.TxID }}</td>\n                            <td>{{ transac.Value.producto }}</td>\n                            <td>{{ transac.Value.modelo }}</td>\n                            <td>{{ transac.Value.tipo }}</td>\n                            <td>{{ transac.Value.dimensiones }}</td>\n                            <td>{{ transac.Value.fechafab }} </td>\n                            <td>{{ transac.Value.materiales }} </td>\n                            <td>{{ transac.Value.descripcion}} </td>\n                            <td>{{ transac.Value.cantidad }} </td>\n                            <td>{{ transac.Value.precio_ud }} </td>\n                            <td>{{ transac.Value.precio_tot }} </td>\n                            <td>{{ transac.Value.origen }} </td>\n                            <td>{{ transac.Value.dst }} </td>\n                            <td>{{ transac.Value.Orderer }} </td>\n                            <td>{{ transac.Value.fechaenv }} </td>\n                        </tr>\n                    </tbody>\n                    <!--Table body-->\n                </table>\n                <!--Table-->\n            </div>\n            <div class=\"text-center\">\n                <a mdbBtn [routerLink]=\"['/world-state']\" class=\"btn green accent-2\">Volver</a>\n            </div><br>\n        </div>\n    </div>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/world-state/world-state.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/world-state/world-state.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container pt-3\">\n    <div class=\"card\">\n        <div class=\"card-body\">\n\n            <h2> World Estate - ChannelAll</h2><hr>\n            <h5 class=\"text-center\" style=\"color:red;\">¡ Atención, las transacciones pueden no cargar. Recargar hasta que aparezcan !</h5>\n            <div class=\"text-center\">\n                <button mdbBtn (click)=\"queryChannelAll()\" class=\"btn green accent-2\">Recargar</button>\n            </div><br>\n            <!--Table-->\n            <div class=\"table-responsive\">\n                <table class=\"table table-striped\">\n\n                    <!--Table head-->\n                    <thead>\n                        <tr>\n                            <th>Key</th>\n                            <th>Producto</th>\n                            <th>Modelo</th>\n                            <th>Tipo</th>\n                            <th>Dimensiones</th>\n                            <th>Fecha fabricación</th>\n                            <th>Materiales</th>\n                            <th>Descripción</th>\n                            <th>Cantidad</th>\n                            <th>Precio Ud</th>\n                            <th>Precio Total</th>\n                            <th>Origen</th>\n                            <th>Destino</th>\n                            <th>Ordenante</th>\n                            <th>Fecha envio</th>\n                            <th>Acciones</th>\n                        </tr>\n                    </thead>\n                    <!--Table head-->\n\n                    <!--Table body-->\n                    <tbody>\n                        <tr *ngFor=\"let estado of channelall\">\n                            <!-- Aquí va el ngFor-->\n                            <td scope=\"row\">{{ estado.Key }}</td>\n                            <td>{{ estado.Record.producto }}</td>\n                            <td>{{ estado.Record.modelo }}</td>\n                            <td>{{ estado.Record.tipo }}</td>\n                            <td>{{ estado.Record.dimensiones }}</td>\n                            <td>{{ estado.Record.fechafab }} </td>\n                            <td>{{ estado.Record.materiales }} </td>\n                            <td>{{ estado.Record.descripcion}} </td>\n                            <td>{{ estado.Record.cantidad }} </td>\n                            <td>{{ estado.Record.precio_ud }} </td>\n                            <td>{{ estado.Record.precio_tot }} </td>\n                            <td>{{ estado.Record.origen }} </td>\n                            <td>{{ estado.Record.dst }} </td>\n                            <td>{{ estado.Record.Orderer }} </td>\n                            <td>{{ estado.Record.fechaenv }} </td>\n                            <td *ngIf=\"esAdmin()\">  \n                                <a style=\"width:140px; height: 40px;\" class=\"btn btn-unique waves-light rounded purple-grad\" [routerLink]=\"['/edtrans', estado.Key, 'channelall']\" mdbWavesEffect>Editar</a>\n                            </td>\n                            <td>\n                                <a style=\"width:140px; height: 40px;\" class=\"btn btn-unique waves-light rounded danger-grad\" [routerLink]=\"['/transhist', estado.Key, 'channelall']\" mdbWavesEffect>Historial</a>\n                            </td>\n                        </tr>\n                    </tbody>\n                    <!--Table body-->\n                </table>\n                <!--Table-->\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Entidad2';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _componentes_log_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./componentes/log/login/login.component */ "./src/app/componentes/log/login/login.component.ts");
/* harmony import */ var _componentes_log_signup_signup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./componentes/log/signup/signup.component */ "./src/app/componentes/log/signup/signup.component.ts");
/* harmony import */ var _componentes_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./componentes/home/home.component */ "./src/app/componentes/home/home.component.ts");
/* harmony import */ var _componentes_panel_administracion_panel_administracion_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./componentes/panel-administracion/panel-administracion.component */ "./src/app/componentes/panel-administracion/panel-administracion.component.ts");
/* harmony import */ var _componentes_perfil_perfil_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./componentes/perfil/perfil.component */ "./src/app/componentes/perfil/perfil.component.ts");
/* harmony import */ var _componentes_editar_usuario_editar_usuario_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./componentes/editar-usuario/editar-usuario.component */ "./src/app/componentes/editar-usuario/editar-usuario.component.ts");
/* harmony import */ var _componentes_eliminar_usuario_eliminar_usuario_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./componentes/eliminar-usuario/eliminar-usuario.component */ "./src/app/componentes/eliminar-usuario/eliminar-usuario.component.ts");
/* harmony import */ var _componentes_world_state_world_state_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./componentes/world-state/world-state.component */ "./src/app/componentes/world-state/world-state.component.ts");
/* harmony import */ var _servicios_log_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./servicios/log.service */ "./src/app/servicios/log.service.ts");
/* harmony import */ var _servicios_auth_guard_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./servicios/auth-guard.service */ "./src/app/servicios/auth-guard.service.ts");
/* harmony import */ var _servicios_admin_guard_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./servicios/admin-guard.service */ "./src/app/servicios/admin-guard.service.ts");
/* harmony import */ var _servicios_usuarios_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./servicios/usuarios.service */ "./src/app/servicios/usuarios.service.ts");
/* harmony import */ var _servicios_blockchain_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./servicios/blockchain.service */ "./src/app/servicios/blockchain.service.ts");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _componentes_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./componentes/shared/navbar/navbar.component */ "./src/app/componentes/shared/navbar/navbar.component.ts");
/* harmony import */ var _componentes_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./componentes/shared/footer/footer.component */ "./src/app/componentes/shared/footer/footer.component.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var _componentes_add_transaction_add_transaction_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./componentes/add-transaction/add-transaction.component */ "./src/app/componentes/add-transaction/add-transaction.component.ts");
/* harmony import */ var _componentes_trans_historial_trans_historial_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./componentes/trans-historial/trans-historial.component */ "./src/app/componentes/trans-historial/trans-historial.component.ts");
/* harmony import */ var _componentes_editar_transaccion_editar_transaccion_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./componentes/editar-transaccion/editar-transaccion.component */ "./src/app/componentes/editar-transaccion/editar-transaccion.component.ts");



























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _componentes_log_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
            _componentes_log_signup_signup_component__WEBPACK_IMPORTED_MODULE_8__["SignupComponent"],
            _componentes_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
            _componentes_panel_administracion_panel_administracion_component__WEBPACK_IMPORTED_MODULE_10__["PanelAdministracionComponent"],
            _componentes_perfil_perfil_component__WEBPACK_IMPORTED_MODULE_11__["PerfilComponent"],
            _componentes_editar_usuario_editar_usuario_component__WEBPACK_IMPORTED_MODULE_12__["EditarUsuarioComponent"],
            _componentes_eliminar_usuario_eliminar_usuario_component__WEBPACK_IMPORTED_MODULE_13__["EliminarUsuarioComponent"],
            _componentes_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_21__["NavbarComponent"],
            _componentes_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_22__["FooterComponent"],
            _componentes_world_state_world_state_component__WEBPACK_IMPORTED_MODULE_14__["WorldStateComponent"],
            _componentes_add_transaction_add_transaction_component__WEBPACK_IMPORTED_MODULE_24__["AddTransactionComponent"],
            _componentes_trans_historial_trans_historial_component__WEBPACK_IMPORTED_MODULE_25__["TransHistorialComponent"],
            _componentes_editar_transaccion_editar_transaccion_component__WEBPACK_IMPORTED_MODULE_26__["EditarTransaccionComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _app_routes__WEBPACK_IMPORTED_MODULE_20__["APP_ROUTING"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_23__["MDBBootstrapModule"].forRoot(),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        providers: [
            _servicios_log_service__WEBPACK_IMPORTED_MODULE_15__["LogService"],
            _servicios_auth_guard_service__WEBPACK_IMPORTED_MODULE_16__["AuthGuardService"],
            _servicios_admin_guard_service__WEBPACK_IMPORTED_MODULE_17__["AdminGuardService"],
            _servicios_usuarios_service__WEBPACK_IMPORTED_MODULE_18__["UsuariosService"],
            _servicios_blockchain_service__WEBPACK_IMPORTED_MODULE_19__["BlockchainService"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["NO_ERRORS_SCHEMA"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: APP_ROUTING */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_ROUTING", function() { return APP_ROUTING; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _componentes_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./componentes/home/home.component */ "./src/app/componentes/home/home.component.ts");
/* harmony import */ var _componentes_log_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./componentes/log/login/login.component */ "./src/app/componentes/log/login/login.component.ts");
/* harmony import */ var _componentes_log_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./componentes/log/signup/signup.component */ "./src/app/componentes/log/signup/signup.component.ts");
/* harmony import */ var _componentes_panel_administracion_panel_administracion_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./componentes/panel-administracion/panel-administracion.component */ "./src/app/componentes/panel-administracion/panel-administracion.component.ts");
/* harmony import */ var _componentes_perfil_perfil_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./componentes/perfil/perfil.component */ "./src/app/componentes/perfil/perfil.component.ts");
/* harmony import */ var _componentes_editar_usuario_editar_usuario_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./componentes/editar-usuario/editar-usuario.component */ "./src/app/componentes/editar-usuario/editar-usuario.component.ts");
/* harmony import */ var _servicios_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./servicios/auth-guard.service */ "./src/app/servicios/auth-guard.service.ts");
/* harmony import */ var _servicios_admin_guard_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./servicios/admin-guard.service */ "./src/app/servicios/admin-guard.service.ts");
/* harmony import */ var _componentes_eliminar_usuario_eliminar_usuario_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./componentes/eliminar-usuario/eliminar-usuario.component */ "./src/app/componentes/eliminar-usuario/eliminar-usuario.component.ts");
/* harmony import */ var _componentes_world_state_world_state_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./componentes/world-state/world-state.component */ "./src/app/componentes/world-state/world-state.component.ts");
/* harmony import */ var _componentes_add_transaction_add_transaction_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./componentes/add-transaction/add-transaction.component */ "./src/app/componentes/add-transaction/add-transaction.component.ts");
/* harmony import */ var _componentes_editar_transaccion_editar_transaccion_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./componentes/editar-transaccion/editar-transaccion.component */ "./src/app/componentes/editar-transaccion/editar-transaccion.component.ts");
/* harmony import */ var _componentes_trans_historial_trans_historial_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./componentes/trans-historial/trans-historial.component */ "./src/app/componentes/trans-historial/trans-historial.component.ts");















const app_routes = [
    { path: 'home', component: _componentes_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'login', component: _componentes_log_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'signup', component: _componentes_log_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"] },
    { path: 'world-state', component: _componentes_world_state_world_state_component__WEBPACK_IMPORTED_MODULE_11__["WorldStateComponent"], canActivate: [_servicios_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"]] },
    { path: 'panelAdmin', component: _componentes_panel_administracion_panel_administracion_component__WEBPACK_IMPORTED_MODULE_5__["PanelAdministracionComponent"], canActivate: [_servicios_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"], _servicios_admin_guard_service__WEBPACK_IMPORTED_MODULE_9__["AdminGuardService"]] },
    { path: 'perfil', component: _componentes_perfil_perfil_component__WEBPACK_IMPORTED_MODULE_6__["PerfilComponent"], canActivate: [_servicios_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"]] },
    { path: 'editar/:id', component: _componentes_editar_usuario_editar_usuario_component__WEBPACK_IMPORTED_MODULE_7__["EditarUsuarioComponent"], canActivate: [_servicios_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"], _servicios_admin_guard_service__WEBPACK_IMPORTED_MODULE_9__["AdminGuardService"]] },
    { path: 'eluser/:id', component: _componentes_eliminar_usuario_eliminar_usuario_component__WEBPACK_IMPORTED_MODULE_10__["EliminarUsuarioComponent"], canActivate: [_servicios_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"], _servicios_admin_guard_service__WEBPACK_IMPORTED_MODULE_9__["AdminGuardService"]] },
    { path: 'edtrans/:id/:channel', component: _componentes_editar_transaccion_editar_transaccion_component__WEBPACK_IMPORTED_MODULE_13__["EditarTransaccionComponent"], canActivate: [_servicios_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"], _servicios_admin_guard_service__WEBPACK_IMPORTED_MODULE_9__["AdminGuardService"]] },
    { path: 'transhist/:id/:channel', component: _componentes_trans_historial_trans_historial_component__WEBPACK_IMPORTED_MODULE_14__["TransHistorialComponent"], canActivate: [_servicios_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"]] },
    { path: 'addtrans', component: _componentes_add_transaction_add_transaction_component__WEBPACK_IMPORTED_MODULE_12__["AddTransactionComponent"], canActivate: [_servicios_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"], _servicios_admin_guard_service__WEBPACK_IMPORTED_MODULE_9__["AdminGuardService"]] },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
const APP_ROUTING = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(app_routes);


/***/ }),

/***/ "./src/app/componentes/add-transaction/add-transaction.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/componentes/add-transaction/add-transaction.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2FkZC10cmFuc2FjdGlvbi9hZGQtdHJhbnNhY3Rpb24uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/componentes/add-transaction/add-transaction.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/componentes/add-transaction/add-transaction.component.ts ***!
  \**************************************************************************/
/*! exports provided: AddTransactionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTransactionComponent", function() { return AddTransactionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _servicios_blockchain_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../servicios/blockchain.service */ "./src/app/servicios/blockchain.service.ts");





let AddTransactionComponent = class AddTransactionComponent {
    constructor(_blockService, _router, _activatedRoute) {
        this._blockService = _blockService;
        this._router = _router;
        this._activatedRoute = _activatedRoute;
        this.submitOk = null;
        this.addTrans = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'channel': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('channelall', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]),
            'key': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]),
            'producto': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            'modelo': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            'tipo': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            'dimensiones': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            'fecha_fab': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^(0[1-9]|[12]\\d|3[01])-(0[1-9]|1[0-2])-[12]\\d{3}$')
            ]),
            'materiales': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            'descripcion': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            'cantidad': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            'precio_ud': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            'precio_tot': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            'origen': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('Org2'),
            'dst': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ]),
            'ordenante': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](localStorage.getItem('Nombre')),
            'fecha_env': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^(0[1-9]|[12]\\d|3[01])-(0[1-9]|1[0-2])-[12]\\d{3}$')
            ]),
        });
    }
    ngOnInit() {
        this.submitSusc = this._blockService.submitObservable.subscribe(valor => {
            this.submitOk = valor;
        });
        this.addTrans.controls['key'].disable();
        this.addTrans.controls['channel'].disable();
        this.addTrans.controls['origen'].disable();
        this.addTrans.controls['ordenante'].disable();
    }
    ngOnDestroy() {
        this._blockService.submitObservable.next(null);
        this.submitSusc.unsubscribe();
    }
    reload() {
        console.log(this.addTrans.controls['channel'].value);
        this._blockService.getLastKey(this.addTrans.controls['channel'].value.trim()).subscribe(key => {
            this.addTrans.controls['key'].setValue((+key.response + 1).toString());
        });
    }
    crear() {
        let trans = {
            channel: this.addTrans.controls['channel'].value.trim(),
            key: this.addTrans.controls['key'].value.trim(),
            producto: this.addTrans.controls['producto'].value.trim(),
            modelo: this.addTrans.controls['modelo'].value.trim(),
            tipo: this.addTrans.controls['tipo'].value.trim(),
            dimensiones: this.addTrans.controls['dimensiones'].value.trim(),
            fechafab: this.addTrans.controls['fecha_fab'].value.trim(),
            materiales: this.addTrans.controls['materiales'].value.trim(),
            descripcion: this.addTrans.controls['descripcion'].value.trim(),
            cantidad: this.addTrans.controls['cantidad'].value.trim(),
            precioud: this.addTrans.controls['precio_ud'].value.trim(),
            preciotot: this.addTrans.controls['precio_tot'].value.trim(),
            org: this.addTrans.controls['origen'].value.trim(),
            dst: this.addTrans.controls['dst'].value.trim(),
            ordenante: this.addTrans.controls['ordenante'].value.trim(),
            fechaenv: this.addTrans.controls['fecha_env'].value.trim()
        };
        console.log(trans);
        this._blockService.submitTransaction(trans).subscribe(resp => {
            this._blockService.submitObservable.next(true);
        }, error => {
            this._blockService.submitObservable.next(false);
            console.log(error);
        });
    }
};
AddTransactionComponent.ctorParameters = () => [
    { type: _servicios_blockchain_service__WEBPACK_IMPORTED_MODULE_4__["BlockchainService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
AddTransactionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-transaction',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-transaction.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/add-transaction/add-transaction.component.html")).default,
        styles: ["\n    .ng-invalid.ng-touched:not(form){\n      color: red;\n  }\n", tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-transaction.component.scss */ "./src/app/componentes/add-transaction/add-transaction.component.scss")).default]
    })
], AddTransactionComponent);



/***/ }),

/***/ "./src/app/componentes/editar-transaccion/editar-transaccion.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/componentes/editar-transaccion/editar-transaccion.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2VkaXRhci10cmFuc2FjY2lvbi9lZGl0YXItdHJhbnNhY2Npb24uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/componentes/editar-transaccion/editar-transaccion.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/componentes/editar-transaccion/editar-transaccion.component.ts ***!
  \********************************************************************************/
/*! exports provided: EditarTransaccionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditarTransaccionComponent", function() { return EditarTransaccionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _servicios_blockchain_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../servicios/blockchain.service */ "./src/app/servicios/blockchain.service.ts");





let EditarTransaccionComponent = class EditarTransaccionComponent {
    constructor(_blockService, _router, _activatedRoute) {
        this._blockService = _blockService;
        this._router = _router;
        this._activatedRoute = _activatedRoute;
        this.submitOk = null;
        this.editTrans = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'channel': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]),
            'key': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]),
            'producto': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            'modelo': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            'tipo': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            'dimensiones': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            'fecha_fab': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^(0[1-9]|[12]\\d|3[01])-(0[1-9]|1[0-2])-[12]\\d{3}$')
            ]),
            'materiales': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            'descripcion': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            'cantidad': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            'precio_ud': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            'precio_tot': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            'origen': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            'dst': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            'ordenante': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](localStorage.getItem("Nombre")),
            'fecha_env': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^(0[1-9]|[12]\\d|3[01])-(0[1-9]|1[0-2])-[12]\\d{3}$')
            ]),
        });
    }
    ngOnInit() {
        //Inicialización de los parámetros del formulario con los valores de la transacción
        this._activatedRoute.params.subscribe(datos => {
            this._blockService.queryTransaction(datos['channel'], datos['id']).subscribe(resp => {
                let trans = JSON.parse(resp.response);
                console.log(trans);
                console.log(trans.producto);
                this.editTrans.controls['channel'].disable();
                this.editTrans.controls['key'].disable();
                this.editTrans.controls['ordenante'].disable();
                this.editTrans.controls['origen'].disable();
                this.editTrans.controls['channel'].setValue(datos['channel']);
                this.editTrans.controls['key'].setValue(datos['id']);
                this.editTrans.controls['producto'].setValue(trans.producto);
                this.editTrans.controls['modelo'].setValue(trans.modelo);
                this.editTrans.controls['tipo'].setValue(trans.tipo);
                this.editTrans.controls['dimensiones'].setValue(trans.dimensiones);
                this.editTrans.controls['fecha_fab'].setValue(trans.fechafab);
                this.editTrans.controls['materiales'].setValue(trans.materiales);
                this.editTrans.controls['descripcion'].setValue(trans.descripcion);
                this.editTrans.controls['cantidad'].setValue(trans.cantidad);
                this.editTrans.controls['precio_ud'].setValue(trans.precio_ud);
                this.editTrans.controls['precio_tot'].setValue(trans.precio_tot);
                this.editTrans.controls['origen'].setValue(trans.origen);
                this.editTrans.controls['dst'].setValue(trans.dst);
                this.editTrans.controls['ordenante'].setValue(localStorage.getItem("Nombre"));
                this.editTrans.controls['fecha_env'].setValue(trans.fechaenv);
            });
        });
        this.submitSusc = this._blockService.submitObservable.subscribe(valor => {
            this.submitOk = valor;
        });
    }
    ngOnDestroy() {
        this._blockService.submitObservable.next(null);
        this.submitSusc.unsubscribe();
    }
    reload() {
        this._activatedRoute.params.subscribe(datos => {
            this._blockService.queryTransaction(datos['channel'], datos['id']).subscribe(resp => {
                let trans = JSON.parse(resp.response);
                console.log(trans);
                this.editTrans.controls['channel'].disable();
                this.editTrans.controls['key'].disable();
                this.editTrans.controls['ordenante'].disable();
                this.editTrans.controls['origen'].disable();
                this.editTrans.controls['channel'].setValue(datos['channel']);
                this.editTrans.controls['key'].setValue(datos['id']);
                this.editTrans.controls['producto'].setValue(trans.producto);
                this.editTrans.controls['modelo'].setValue(trans.modelo);
                this.editTrans.controls['tipo'].setValue(trans.tipo);
                this.editTrans.controls['dimensiones'].setValue(trans.dimensiones);
                this.editTrans.controls['fecha_fab'].setValue(trans.fechafab);
                this.editTrans.controls['materiales'].setValue(trans.materiales);
                this.editTrans.controls['descripcion'].setValue(trans.descripcion);
                this.editTrans.controls['cantidad'].setValue(trans.cantidad);
                this.editTrans.controls['precio_ud'].setValue(trans.precio_ud);
                this.editTrans.controls['precio_tot'].setValue(trans.precio_tot);
                this.editTrans.controls['origen'].setValue(trans.origen);
                this.editTrans.controls['dst'].setValue(trans.dst);
                this.editTrans.controls['ordenante'].setValue(localStorage.getItem("Nombre"));
                this.editTrans.controls['fecha_env'].setValue(trans.fechaenv);
            });
        });
    }
    editar() {
        let trans = {
            channel: this.editTrans.controls['channel'].value.trim(),
            key: this.editTrans.controls['key'].value.trim(),
            producto: this.editTrans.controls['producto'].value.trim(),
            modelo: this.editTrans.controls['modelo'].value.trim(),
            tipo: this.editTrans.controls['tipo'].value.trim(),
            dimensiones: this.editTrans.controls['dimensiones'].value.trim(),
            fechafab: this.editTrans.controls['fecha_fab'].value.trim(),
            materiales: this.editTrans.controls['materiales'].value.trim(),
            descripcion: this.editTrans.controls['descripcion'].value.trim(),
            cantidad: this.editTrans.controls['cantidad'].value.trim(),
            precioud: this.editTrans.controls['precio_ud'].value.trim(),
            preciotot: this.editTrans.controls['precio_tot'].value.trim(),
            org: this.editTrans.controls['origen'].value.trim(),
            dst: this.editTrans.controls['dst'].value.trim(),
            ordenante: this.editTrans.controls['ordenante'].value.trim(),
            fechaenv: this.editTrans.controls['fecha_env'].value.trim()
        };
        console.log(trans);
        this._blockService.editTransaction(trans).subscribe(resp => {
            this._blockService.submitObservable.next(true);
        }, error => {
            this._blockService.submitObservable.next(false);
            console.log(error);
        });
    }
    /*******************************
    Funciones de validación extras
    ********************************/
    noVacio(control) {
        if (typeof control.value === 'string' && !control.value.trim()) {
            return {
                novacio: true
            };
        }
        return null;
    }
};
EditarTransaccionComponent.ctorParameters = () => [
    { type: _servicios_blockchain_service__WEBPACK_IMPORTED_MODULE_4__["BlockchainService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
EditarTransaccionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-editar-transaccion',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./editar-transaccion.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/editar-transaccion/editar-transaccion.component.html")).default,
        styles: ["\n    .ng-invalid.ng-touched:not(form){\n      color: red;\n  }\n", tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./editar-transaccion.component.scss */ "./src/app/componentes/editar-transaccion/editar-transaccion.component.scss")).default]
    })
], EditarTransaccionComponent);



/***/ }),

/***/ "./src/app/componentes/editar-usuario/editar-usuario.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/componentes/editar-usuario/editar-usuario.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2VkaXRhci11c3VhcmlvL2VkaXRhci11c3VhcmlvLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/componentes/editar-usuario/editar-usuario.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/componentes/editar-usuario/editar-usuario.component.ts ***!
  \************************************************************************/
/*! exports provided: EditarUsuarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditarUsuarioComponent", function() { return EditarUsuarioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _servicios_usuarios_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../servicios/usuarios.service */ "./src/app/servicios/usuarios.service.ts");





let EditarUsuarioComponent = class EditarUsuarioComponent {
    constructor(_usuariosService, _router, _activatedRoute) {
        this._usuariosService = _usuariosService;
        this._router = _router;
        this._activatedRoute = _activatedRoute;
        this.usuario = null;
        this.editok = null;
        this.passok = null;
        this.cambioDatos = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'nombre': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3),
                this.noVacio
            ]),
            'correo': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.{1}[a-z]{2,3}$"),
                this.noVacio
            ]),
            'permisos': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])
        });
        this.cambioPass = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'nuevaPass': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                this.noVacio,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$")
            ]),
            'rePass': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
        });
        this.cambioPass.controls['rePass'].setValidators([
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            this.noVacio,
            this.coinciden.bind(this)
        ]);
    }
    ngOnInit() {
        //Inicialización de los parámetros del formulario con los valores del usuario
        this._activatedRoute.params.subscribe(datos => {
            this._usuariosService.buscarUsuarioId(datos['id']).subscribe(resp => {
                this.usuario = resp;
                console.log(resp);
                console.log(this.usuario);
                this.cambioDatos.controls['nombre'].setValue(resp.nombre);
                this.cambioDatos.controls['correo'].setValue(resp.correo);
                this.cambioDatos.controls['permisos'].setValue(resp.permisos);
            });
        });
        //Nos suscribimos a los observadores para poder controlar los cambios en los mensajes de confirmación/error
        this.editsusc = this._usuariosService.editObservable.subscribe(valor => {
            this.editok = valor;
        });
        this.passsusc = this._usuariosService.passObservable.subscribe(valor => {
            this.passok = valor;
        });
    }
    ngOnDestroy() {
        this._usuariosService.editObservable.next(null);
        this._usuariosService.passObservable.next(null);
        this.editsusc.unsubscribe();
        this.passsusc.unsubscribe();
    }
    /*******************************
     Funciones funcionales extras
     *******************************/
    editarInfo() {
        let edit = {
            Id: this.usuario.id,
            Nombre: this.cambioDatos.controls['nombre'].value.trim(),
            Correo: this.cambioDatos.controls['correo'].value.trim(),
            Permisos: this.cambioDatos.controls['permisos'].value.trim()
        };
        console.log(edit);
        this._usuariosService.editarDatos(edit, "EditUser")
            .subscribe(respuesta => {
            this._usuariosService.editObservable.next(true);
        }, error => {
            this._usuariosService.editObservable.next(false);
            console.log(error);
        });
    }
    cambiarPassword() {
        let nuevaPass = {
            Id: this.usuario.id,
            Hash: this.cambioPass.controls['nuevaPass'].value.trim()
        };
        console.log(nuevaPass);
        this._usuariosService.cambiarPass(nuevaPass, "ChangePUser")
            .subscribe(respuesta => {
            this._usuariosService.passObservable.next(true);
        }, error => {
            this._usuariosService.passObservable.next(false);
            console.log(error);
        });
    }
    /*******************************
    Funciones de validación extras
    ********************************/
    noVacio(control) {
        if (typeof control.value === 'string' && !control.value.trim()) {
            return {
                novacio: true
            };
        }
        return null;
    }
    coinciden(control) {
        if (control.value !== this.cambioPass.controls['nuevaPass'].value) {
            return {
                nocoinciden: true
            };
        }
        return null;
    }
};
EditarUsuarioComponent.ctorParameters = () => [
    { type: _servicios_usuarios_service__WEBPACK_IMPORTED_MODULE_4__["UsuariosService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
EditarUsuarioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-editar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./editar-usuario.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/editar-usuario/editar-usuario.component.html")).default,
        styles: ["\n    .ng-invalid.ng-touched:not(form){\n      color: red;\n  }\n", tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./editar-usuario.component.scss */ "./src/app/componentes/editar-usuario/editar-usuario.component.scss")).default]
    })
], EditarUsuarioComponent);



/***/ }),

/***/ "./src/app/componentes/eliminar-usuario/eliminar-usuario.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/componentes/eliminar-usuario/eliminar-usuario.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2VsaW1pbmFyLXVzdWFyaW8vZWxpbWluYXItdXN1YXJpby5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/componentes/eliminar-usuario/eliminar-usuario.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/componentes/eliminar-usuario/eliminar-usuario.component.ts ***!
  \****************************************************************************/
/*! exports provided: EliminarUsuarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EliminarUsuarioComponent", function() { return EliminarUsuarioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _servicios_usuarios_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../servicios/usuarios.service */ "./src/app/servicios/usuarios.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");





let EliminarUsuarioComponent = class EliminarUsuarioComponent {
    constructor(_activatedRoute, _router, _usuariosService, _location) {
        this._activatedRoute = _activatedRoute;
        this._router = _router;
        this._usuariosService = _usuariosService;
        this._location = _location;
    }
    ngOnInit() {
    }
    eliminar() {
        let id = this._location.path().split("/")[2];
        this._usuariosService.eliminarUsuario(id).subscribe(resp => {
            if (resp.ok) {
                this._router.navigate(['/panelAdmin']);
            }
        });
    }
};
EliminarUsuarioComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _servicios_usuarios_service__WEBPACK_IMPORTED_MODULE_3__["UsuariosService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] }
];
EliminarUsuarioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-eliminar-usuario',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./eliminar-usuario.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/eliminar-usuario/eliminar-usuario.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./eliminar-usuario.component.scss */ "./src/app/componentes/eliminar-usuario/eliminar-usuario.component.scss")).default]
    })
], EliminarUsuarioComponent);



/***/ }),

/***/ "./src/app/componentes/home/home.component.scss":
/*!******************************************************!*\
  !*** ./src/app/componentes/home/home.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/componentes/home/home.component.ts":
/*!****************************************************!*\
  !*** ./src/app/componentes/home/home.component.ts ***!
  \****************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _servicios_log_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../servicios/log.service */ "./src/app/servicios/log.service.ts");



let HomeComponent = class HomeComponent {
    constructor(_logService) {
        this._logService = _logService;
    }
    ngOnInit() {
        //Comprobamos si la sesión del usuario está activa
        if (this.sesionActiva()) {
            this.Nombre = localStorage.getItem("Nombre");
        }
    }
    sesionActiva() {
        return this._logService.sesionValida();
    }
};
HomeComponent.ctorParameters = () => [
    { type: _servicios_log_service__WEBPACK_IMPORTED_MODULE_2__["LogService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/componentes/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/componentes/log/login/login.component.scss":
/*!************************************************************!*\
  !*** ./src/app/componentes/log/login/login.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2xvZy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/componentes/log/login/login.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/componentes/log/login/login.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _servicios_log_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../servicios/log.service */ "./src/app/servicios/log.service.ts");





let LoginComponent = class LoginComponent {
    constructor(_logService, _router, ref) {
        this._logService = _logService;
        this._router = _router;
        this.ref = ref;
        this.datos = {
            Nombre: null,
            Correo: null,
            Hash: null
        };
        this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"),
                this.noVacio
            ]),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                this.noVacio
            ])
        });
    }
    ngOnInit() {
        if (this._logService.sesionValida()) {
            this._router.navigate(['/home']);
        }
        this.subscription = this._logService.logObservable.subscribe(valor => {
            this.correcto = valor;
        });
    }
    ngOnDestroy() {
        this._logService.logObservable.next(true);
        this.subscription.unsubscribe();
    }
    logearse() {
        this.datos = {
            Nombre: null,
            Correo: this.forma.controls['email'].value,
            Hash: this.forma.controls['password'].value
        };
        console.log(this.datos);
        this._logService.conectarse(this.datos)
            .subscribe(resp => {
            console.log(resp);
            this._router.navigate(['/home']);
        }, error => {
            this._logService.logObservable.next(false);
            console.log(error);
            if (error.error.text != null) {
                this._logService.crearSesion(error.error.text);
                this._router.navigate(['/home']);
            }
        });
    }
    //Validaciones
    noVacio(control) {
        if (typeof control.value === 'string' && !control.value.trim()) {
            return {
                novacio: true
            };
        }
        return null;
    }
};
LoginComponent.ctorParameters = () => [
    { type: _servicios_log_service__WEBPACK_IMPORTED_MODULE_4__["LogService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/log/login/login.component.html")).default,
        styles: ["\n    .ng-invalid.ng-touched:not(form){\n      color: red;\n    }\n  ", tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/componentes/log/login/login.component.scss")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/componentes/log/signup/signup.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/componentes/log/signup/signup.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2xvZy9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/componentes/log/signup/signup.component.ts":
/*!************************************************************!*\
  !*** ./src/app/componentes/log/signup/signup.component.ts ***!
  \************************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _servicios_log_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../servicios/log.service */ "./src/app/servicios/log.service.ts");





let SignupComponent = class SignupComponent {
    //Constructor
    constructor(_logService, _router) {
        this._logService = _logService;
        this._router = _router;
        this.usuario = {
            Nombre: null,
            Correo: null,
            Hash: null
        };
        this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'nombre': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3),
                this.noVacio
            ]),
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.{1}[a-z]{2,3}$"),
                this.noVacio
            ], [
                this.existeEmail.bind(this)
            ]),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                this.noVacio,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-+/()|]).{5,}$")
            ]),
            'repassReg': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
        });
        /*
        Validación de las passwords
        -----------------------------------
        Se utiliza esta forma para comprender el contexto en el que se puede utilizar o no this.
        Al utilizar coinciden.bind(this) lo que se consigue es que dentro del contexto de la función cuando se haga referencia
        a this en realidad se está haciendo referencia al this del contexto actual y general.
        Se podría realizar al igual que el resto de validaciones pero esta es una forma alternativa e igual de válida.
        */
        this.forma.controls['repassReg'].setValidators([
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            this.noVacio,
            this.coinciden.bind(this) //Se utiliza para vincular "this" en el contexto de la función y poder acceder a "this.forma" desde coinciden
        ]);
        //this.forma.setValue(this.usuario); De esta forma se pueden dar valores por defecto a cada campo.
    }
    ngOnInit() {
        if (this._logService.sesionValida()) {
            this._router.navigate(['/home']);
        }
    }
    //Función a la que se llama una vez el formulario ha sido validado
    registrar() {
        this.usuario = {
            Nombre: this.forma.controls['nombre'].value.trim(),
            Correo: this.forma.controls['email'].value.trim(),
            Hash: this.forma.controls['password'].value.trim()
        };
        console.log(this.usuario);
        this._logService.nuevoUsuario(this.usuario)
            .subscribe((respuesta) => {
            if (respuesta.ok) {
                this._router.navigate(['/login']);
            }
        });
    }
    //Validaciones
    noVacio(control) {
        if (typeof control.value === 'string' && !control.value.trim()) {
            return {
                novacio: true
            };
        }
        return null;
    }
    coinciden(control) {
        if (control.value !== this.forma.controls['password'].value) { //Es válido porque antes de llamar a la función vinculamos this con this usando bind
            return {
                nocoindicen: true
            };
        }
        return null;
    }
    existeEmail(control) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                this._logService.existeEmail(control.value).subscribe(respuesta => {
                    console.log(control);
                    if (respuesta == 0) {
                        resolve(null);
                    }
                    else {
                        resolve({ existeEmail: true });
                    }
                }, error => {
                    console.log(error);
                    reject();
                });
            }, 1000);
        });
    }
};
SignupComponent.ctorParameters = () => [
    { type: _servicios_log_service__WEBPACK_IMPORTED_MODULE_4__["LogService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/log/signup/signup.component.html")).default,
        styles: ["\n    .ng-invalid.ng-touched:not(form){\n      color: red;\n    }\n  ", tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signup.component.scss */ "./src/app/componentes/log/signup/signup.component.scss")).default]
    })
], SignupComponent);



/***/ }),

/***/ "./src/app/componentes/panel-administracion/panel-administracion.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/componentes/panel-administracion/panel-administracion.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL3BhbmVsLWFkbWluaXN0cmFjaW9uL3BhbmVsLWFkbWluaXN0cmFjaW9uLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/componentes/panel-administracion/panel-administracion.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/componentes/panel-administracion/panel-administracion.component.ts ***!
  \************************************************************************************/
/*! exports provided: PanelAdministracionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelAdministracionComponent", function() { return PanelAdministracionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _servicios_usuarios_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../servicios/usuarios.service */ "./src/app/servicios/usuarios.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let PanelAdministracionComponent = class PanelAdministracionComponent {
    constructor(_usuariosService, _router) {
        this._usuariosService = _usuariosService;
        this._router = _router;
        _usuariosService.obtenerUsuarios().subscribe((datos) => {
            this.usuarios = datos;
            console.log(datos);
        });
    }
    ngOnInit() {
    }
    buscar() {
        this._usuariosService.buscarUsuario(this.searchText).subscribe((datos) => {
            this.usuarios = datos;
            console.log(datos);
        });
    }
    todos() {
        this._usuariosService.obtenerUsuarios().subscribe(datos => {
            this.usuarios = datos;
        });
    }
};
PanelAdministracionComponent.ctorParameters = () => [
    { type: _servicios_usuarios_service__WEBPACK_IMPORTED_MODULE_2__["UsuariosService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
PanelAdministracionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-panel-administracion',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./panel-administracion.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/panel-administracion/panel-administracion.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./panel-administracion.component.scss */ "./src/app/componentes/panel-administracion/panel-administracion.component.scss")).default]
    })
], PanelAdministracionComponent);



/***/ }),

/***/ "./src/app/componentes/perfil/perfil.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/componentes/perfil/perfil.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL3BlcmZpbC9wZXJmaWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/componentes/perfil/perfil.component.ts":
/*!********************************************************!*\
  !*** ./src/app/componentes/perfil/perfil.component.ts ***!
  \********************************************************/
/*! exports provided: PerfilComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilComponent", function() { return PerfilComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _servicios_usuarios_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../servicios/usuarios.service */ "./src/app/servicios/usuarios.service.ts");
/* harmony import */ var _servicios_log_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../servicios/log.service */ "./src/app/servicios/log.service.ts");






let PerfilComponent = class PerfilComponent {
    constructor(_usuariosService, _router, _logService) {
        this._usuariosService = _usuariosService;
        this._router = _router;
        this._logService = _logService;
        this.editok = null;
        this.passok = null;
        this.cambioDatos = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'nombre': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](localStorage.getItem("Nombre"), [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3),
                this.noVacio
            ]),
            'correo': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](localStorage.getItem("Correo"), [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.{1}[a-z]{2,3}$"),
                this.noVacio
            ])
        });
        this.cambioPass = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'nuevaPass': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                this.noVacio,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$")
            ]),
            'rePass': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
        });
        this.cambioPass.controls['rePass'].setValidators([
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            this.noVacio,
            this.coinciden.bind(this)
        ]);
    }
    ngOnInit() {
        this.editsusc = this._usuariosService.editObservable.subscribe(valor => {
            this.editok = valor;
        });
        this.passsusc = this._usuariosService.passObservable.subscribe(valor => {
            this.passok = valor;
        });
    }
    ngOnDestroy() {
        this._usuariosService.editObservable.next(null);
        this._usuariosService.passObservable.next(null);
        this.editsusc.unsubscribe();
        this.passsusc.unsubscribe();
    }
    /*******************************
     Funciones funcionales extras
     *******************************/
    editarInfo() {
        let edit = {
            Id: +localStorage.getItem("Id"),
            Nombre: this.cambioDatos.controls['nombre'].value.trim(),
            Correo: this.cambioDatos.controls['correo'].value.trim(),
            Permisos: localStorage.getItem("Permisos")
        };
        this._usuariosService.editarDatos(edit, "Edit")
            .subscribe(respuesta => {
            this._logService.cerrarSesion();
            this._logService.crearSesion(respuesta.body);
            this._usuariosService.editObservable.next(true);
        }, error => {
            console.log(error);
            if (error.error.text != null) {
                this._logService.crearSesion(error.error.text);
                this._usuariosService.editObservable.next(true);
            }
            else {
                this._usuariosService.editObservable.next(false);
            }
        });
    }
    cambiarPassword() {
        let nuevaPass = {
            Id: +localStorage.getItem("Id"),
            Hash: this.cambioPass.controls['nuevaPass'].value.trim()
        };
        console.log(nuevaPass);
        this._usuariosService.cambiarPass(nuevaPass, "ChangeP")
            .subscribe(respuesta => {
            this._usuariosService.passObservable.next(true);
        }, error => {
            this._usuariosService.passObservable.next(false);
            console.log(error);
        });
    }
    /*******************************
    Funciones de validación extras
    ********************************/
    noVacio(control) {
        if (typeof control.value === 'string' && !control.value.trim()) {
            return {
                novacio: true
            };
        }
        return null;
    }
    coinciden(control) {
        if (control.value !== this.cambioPass.controls['nuevaPass'].value) {
            return {
                nocoinciden: true
            };
        }
        return null;
    }
};
PerfilComponent.ctorParameters = () => [
    { type: _servicios_usuarios_service__WEBPACK_IMPORTED_MODULE_4__["UsuariosService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _servicios_log_service__WEBPACK_IMPORTED_MODULE_5__["LogService"] }
];
PerfilComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-perfil',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./perfil.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/perfil/perfil.component.html")).default,
        styles: ["\n    .ng-invalid.ng-touched:not(form){\n      color: red;\n  }\n", tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./perfil.component.scss */ "./src/app/componentes/perfil/perfil.component.scss")).default]
    })
], PerfilComponent);



/***/ }),

/***/ "./src/app/componentes/shared/footer/footer.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/componentes/shared/footer/footer.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/componentes/shared/footer/footer.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/componentes/shared/footer/footer.component.ts ***!
  \***************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/shared/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.scss */ "./src/app/componentes/shared/footer/footer.component.scss")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/componentes/shared/navbar/navbar.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/componentes/shared/navbar/navbar.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL3NoYXJlZC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/componentes/shared/navbar/navbar.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/componentes/shared/navbar/navbar.component.ts ***!
  \***************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _servicios_log_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../servicios/log.service */ "./src/app/servicios/log.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let NavbarComponent = class NavbarComponent {
    constructor(_logService, _router) {
        this._logService = _logService;
        this._router = _router;
    }
    ngOnInit() {
    }
    sesionActiva() {
        return this._logService.sesionValida();
    }
    esAdmin() {
        return this._logService.esAdmin();
    }
    desconectarse() {
        this._logService.cerrarSesion();
        this._router.navigate(['/home']);
    }
};
NavbarComponent.ctorParameters = () => [
    { type: _servicios_log_service__WEBPACK_IMPORTED_MODULE_2__["LogService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/shared/navbar/navbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.component.scss */ "./src/app/componentes/shared/navbar/navbar.component.scss")).default]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/componentes/trans-historial/trans-historial.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/componentes/trans-historial/trans-historial.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL3RyYW5zLWhpc3RvcmlhbC90cmFucy1oaXN0b3JpYWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/componentes/trans-historial/trans-historial.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/componentes/trans-historial/trans-historial.component.ts ***!
  \**************************************************************************/
/*! exports provided: TransHistorialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransHistorialComponent", function() { return TransHistorialComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _servicios_blockchain_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../servicios/blockchain.service */ "./src/app/servicios/blockchain.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let TransHistorialComponent = class TransHistorialComponent {
    constructor(_blockService, _router, _activatedRoute) {
        this._blockService = _blockService;
        this._router = _router;
        this._activatedRoute = _activatedRoute;
        this.queryHist();
    }
    ngOnInit() {
        this.queryHist();
    }
    queryHist() {
        this._activatedRoute.params.subscribe(datos => {
            this.key = datos['id'];
            this._blockService.queryHist(datos['channel'], datos['id']).subscribe(resp => {
                let hists = JSON.parse(resp.response);
                console.log(hists);
                this.historial = hists;
            });
        });
    }
};
TransHistorialComponent.ctorParameters = () => [
    { type: _servicios_blockchain_service__WEBPACK_IMPORTED_MODULE_2__["BlockchainService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
TransHistorialComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-trans-historial',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./trans-historial.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/trans-historial/trans-historial.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./trans-historial.component.scss */ "./src/app/componentes/trans-historial/trans-historial.component.scss")).default]
    })
], TransHistorialComponent);



/***/ }),

/***/ "./src/app/componentes/world-state/world-state.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/componentes/world-state/world-state.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL3dvcmxkLXN0YXRlL3dvcmxkLXN0YXRlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/componentes/world-state/world-state.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/componentes/world-state/world-state.component.ts ***!
  \******************************************************************/
/*! exports provided: WorldStateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorldStateComponent", function() { return WorldStateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _servicios_blockchain_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../servicios/blockchain.service */ "./src/app/servicios/blockchain.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_servicios_log_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/servicios/log.service */ "./src/app/servicios/log.service.ts");





let WorldStateComponent = class WorldStateComponent {
    constructor(_blockService, _router, _logService) {
        this._blockService = _blockService;
        this._router = _router;
        this._logService = _logService;
        this.channelall_lastKey = "";
        this.channel13_lastKey = "";
    }
    ngOnInit() {
        this.queryChannelAll();
        this.getLastKeyAll();
    }
    esAdmin() {
        return this._logService.esAdmin();
    }
    getLastKeyAll() {
        this._blockService.getLastKey("channelall").subscribe((key) => {
            console.log(key.response);
            this.channelall_lastKey = (+key.response + 1).toString();
        });
    }
    queryChannelAll() {
        this.getLastKeyAll();
        let lastIdx;
        if (this.channelall_lastKey == "") {
            lastIdx = "9";
        }
        else {
            lastIdx = this.channelall_lastKey;
        }
        this._blockService.queryTransactions("channelall", "1", lastIdx).subscribe((datos) => {
            console.log(JSON.parse(datos.response));
            this.channelall = JSON.parse(datos.response);
        });
    }
};
WorldStateComponent.ctorParameters = () => [
    { type: _servicios_blockchain_service__WEBPACK_IMPORTED_MODULE_2__["BlockchainService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_servicios_log_service__WEBPACK_IMPORTED_MODULE_4__["LogService"] }
];
WorldStateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-world-state',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./world-state.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/world-state/world-state.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./world-state.component.scss */ "./src/app/componentes/world-state/world-state.component.scss")).default]
    })
], WorldStateComponent);



/***/ }),

/***/ "./src/app/servicios/admin-guard.service.ts":
/*!**************************************************!*\
  !*** ./src/app/servicios/admin-guard.service.ts ***!
  \**************************************************/
/*! exports provided: AdminGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuardService", function() { return AdminGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _log_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./log.service */ "./src/app/servicios/log.service.ts");



let AdminGuardService = class AdminGuardService {
    constructor(_logService) {
        this._logService = _logService;
    }
    canActivate(next, state) {
        return this._logService.esAdmin();
    }
};
AdminGuardService.ctorParameters = () => [
    { type: _log_service__WEBPACK_IMPORTED_MODULE_2__["LogService"] }
];
AdminGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AdminGuardService);



/***/ }),

/***/ "./src/app/servicios/auth-guard.service.ts":
/*!*************************************************!*\
  !*** ./src/app/servicios/auth-guard.service.ts ***!
  \*************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _log_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./log.service */ "./src/app/servicios/log.service.ts");



let AuthGuardService = class AuthGuardService {
    constructor(_logService) {
        this._logService = _logService;
    }
    canActivate(next, state) {
        return this._logService.sesionValida();
    }
};
AuthGuardService.ctorParameters = () => [
    { type: _log_service__WEBPACK_IMPORTED_MODULE_2__["LogService"] }
];
AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuardService);



/***/ }),

/***/ "./src/app/servicios/blockchain.service.ts":
/*!*************************************************!*\
  !*** ./src/app/servicios/blockchain.service.ts ***!
  \*************************************************/
/*! exports provided: BlockchainService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockchainService", function() { return BlockchainService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _node_modules_rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../node_modules/rxjs */ "./node_modules/rxjs/_esm2015/index.js");





let BlockchainService = class BlockchainService {
    constructor(http) {
        this.http = http;
        this.nodeapi = "https://51.145.147.212:8080/api/";
        this.submitObservable = new _node_modules_rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
    }
    test() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        });
        let url = `${this.nodeapi}test`;
        return this.http.get(url, { headers, observe: 'response' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(resp => {
            console.log(resp);
        }));
    }
    getLastKey(channel) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        });
        let datos = {
            channel: channel,
            key: "lastKey"
        };
        let body = JSON.stringify(datos);
        console.log(body);
        let url = `${this.nodeapi}query`;
        return this.http.post(url, body, { headers, observe: 'response' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(resp => {
            console.log(resp);
            if (resp.ok) {
                return resp.body;
            }
        }));
    }
    queryTransactions(channel, initKey, endKey) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        });
        let datos = {
            channel: channel,
            initKey: initKey,
            endKey: endKey
        };
        let body = JSON.stringify(datos);
        console.log(body);
        let url = `${this.nodeapi}queryall`;
        return this.http.post(url, body, { headers, observe: 'response' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(resp => {
            console.log(resp);
            if (resp.ok) {
                return resp.body;
            }
        }));
    }
    queryTransaction(channel, key) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        });
        let datos = {
            channel: channel,
            key: key
        };
        let body = JSON.stringify(datos);
        console.log(body);
        let url = `${this.nodeapi}query`;
        return this.http.post(url, body, { headers, observe: 'response' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(resp => {
            console.log(resp);
            if (resp.ok) {
                return resp.body;
            }
        }));
    }
    queryHist(channel, key) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        });
        let datos = {
            channel: channel,
            key: key
        };
        let body = JSON.stringify(datos);
        console.log(body);
        let url = `${this.nodeapi}queryhist`;
        return this.http.post(url, body, { headers, observe: 'response' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(resp => {
            console.log(resp);
            if (resp.ok) {
                return resp.body;
            }
        }));
    }
    submitTransaction(newTrans) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        });
        let body = JSON.stringify(newTrans);
        console.log(body);
        let url = `${this.nodeapi}addship`;
        return this.http.post(url, body, { headers, observe: 'response' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(resp => {
            console.log(resp);
            return resp;
        }));
    }
    editTransaction(newTrans) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        });
        let body = JSON.stringify(newTrans);
        console.log(body);
        let url = `${this.nodeapi}editship`;
        return this.http.post(url, body, { headers, observe: 'response' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(resp => {
            console.log(resp);
            return resp;
        }));
    }
};
BlockchainService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
BlockchainService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BlockchainService);



/***/ }),

/***/ "./src/app/servicios/log.service.ts":
/*!******************************************!*\
  !*** ./src/app/servicios/log.service.ts ***!
  \******************************************/
/*! exports provided: LogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogService", function() { return LogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





let LogService = class LogService {
    constructor(http) {
        this.http = http;
        this.apptime = "https://apitfm.azurewebsites.net/api/Entidad2/";
        this.logObservable = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](true);
    }
    //Función que envía la información del usuario para registrarlo
    nuevoUsuario(usuario) {
        let body = JSON.stringify(usuario);
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        let url = this.apptime + "Save";
        return this.http.post(url, body, { headers, observe: 'response' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(resp => {
            console.log(resp);
            return resp;
        }));
    }
    //Función que envía las credenciales para iniciar sesión
    conectarse(datos) {
        let body = JSON.stringify(datos);
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        });
        let url = `${this.apptime}Log`;
        return this.http.post(url, body, { headers, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(resp => {
            // if (resp.ok) {
            //   this.crearSesion(resp.body);
            // }
            return resp;
        }));
    }
    //Función que comprueba si existe un email dado
    existeEmail(email) {
        let datos = {
            Correo: email
        };
        let body = JSON.stringify(datos);
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        let url = `${this.apptime}Existe`;
        return this.http.post(url, body, { headers, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(resp => {
            return resp.body;
        }));
    }
    //Función que crea la sesión del usuario en el navegador
    crearSesion(token) {
        let tokenJson = JSON.parse(atob(token.split('.')[1])); //atob es una función que decodifica un string en base64
        let tokenString = token.toString();
        //Almacenamos la información en el almacenamiento local
        localStorage.setItem("Ent2-token", tokenString);
        localStorage.setItem("Nombre", tokenJson.Nombre);
        localStorage.setItem("Correo", tokenJson.Correo);
        localStorage.setItem("Id", tokenJson.Id);
        localStorage.setItem("Permisos", tokenJson.Permisos);
        localStorage.setItem("Exp", tokenJson.exp);
    }
    //Función que borra la información del usuario del almacenamiento local
    cerrarSesion() {
        localStorage.removeItem("Ent2-token");
        localStorage.removeItem("Nombre");
        localStorage.removeItem("Correo");
        localStorage.removeItem("Id");
        localStorage.removeItem("Permisos");
        localStorage.removeItem("Exp");
    }
    //Función que comprueba si el usuario es administrador
    esAdmin() {
        return localStorage.getItem("Permisos") != null && localStorage.getItem("Permisos") == "admin";
    }
    //Función que comprueba si el token no ha expirado
    sesionValida() {
        return +localStorage.getItem("Exp") * 1000 > new Date().getTime(); //El signo + convierte de string a number
        // Se multiplica por 1000 para pasar de segundos a milisegundos
    }
};
LogService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
LogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], LogService);



/***/ }),

/***/ "./src/app/servicios/usuarios.service.ts":
/*!***********************************************!*\
  !*** ./src/app/servicios/usuarios.service.ts ***!
  \***********************************************/
/*! exports provided: UsuariosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosService", function() { return UsuariosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _log_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./log.service */ "./src/app/servicios/log.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _node_modules_rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../node_modules/rxjs */ "./node_modules/rxjs/_esm2015/index.js");






let UsuariosService = class UsuariosService {
    constructor(http, logServ) {
        this.http = http;
        this.logServ = logServ;
        this.apptime = "https://apitfm.azurewebsites.net/api/Entidad2/";
        this.editObservable = new _node_modules_rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](null);
        this.passObservable = new _node_modules_rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](null);
    }
    editarDatos(datos, method) {
        let body = JSON.stringify(datos);
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + localStorage.getItem("Ent2-token"),
            'Access-Control-Allow-Origin': '*'
        });
        let url = `${this.apptime}${method}`;
        return this.http.post(url, body, { headers, observe: 'response' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(resp => {
            console.log(resp);
            return resp;
        }));
    }
    eliminarUsuario(id) {
        let datos = {
            Id: +id
        };
        console.log(datos);
        let body = JSON.stringify(datos);
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + localStorage.getItem("Ent2-token")
        });
        let url = `${this.apptime}Del`;
        return this.http.post(url, body, { headers, observe: 'response' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(resp => {
            console.log(resp);
            return resp;
        }));
    }
    cambiarPass(datos, method) {
        let body = JSON.stringify(datos);
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("Ent2-token")}`,
            'Access-Control-Allow-Origin': '*'
        });
        let url = `${this.apptime}${method}`;
        return this.http.post(url, body, { headers, observe: 'response' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(resp => {
            console.log(resp);
            return resp;
        }));
    }
    obtenerUsuarios() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': `Bearer ${localStorage.getItem("Ent2-token")}`
        });
        let url = `${this.apptime}GetAll`;
        return this.http.get(url, { headers, observe: 'response' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(resp => {
            console.log(resp);
            if (resp.ok) {
                return resp.body;
            }
        }));
    }
    buscarUsuario(texto) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': `Bearer ${localStorage.getItem("Ent2-token")}`
        });
        let url = `${this.apptime}Name/${texto}`;
        return this.http.get(url, { headers, observe: 'response' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(resp => {
            console.log(resp);
            if (resp.ok) {
                return resp.body;
            }
        }));
    }
    buscarUsuarioId(id) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': `Bearer ${localStorage.getItem("Ent2-token")}`
        });
        let url = `${this.apptime}Get/${id}`;
        return this.http.get(url, { headers, observe: 'response' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(resp => {
            console.log(resp);
            if (resp.ok) {
                return resp.body;
            }
        }));
    }
};
UsuariosService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _log_service__WEBPACK_IMPORTED_MODULE_3__["LogService"] }
];
UsuariosService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], UsuariosService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/oliver/Documents/VSC_Projects/TFM/Entidad2/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);