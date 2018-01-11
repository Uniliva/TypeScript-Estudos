System.register(["./../models/index", "./../views/index", "../helpers/decorectors/indexs"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var index_1, index_2, indexs_1, NegociacaoController, diaDaSemana;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            },
            function (indexs_1_1) {
                indexs_1 = indexs_1_1;
            }
        ],
        execute: function () {
            NegociacaoController = class NegociacaoController {
                constructor() {
                    this._negociacoes = new index_1.Negociacoes();
                    this._inputData = $("#data");
                    this._inputQuantidade = $("#quantidade");
                    this._inputValor = $("#valor");
                    this._negociacaoView = new index_2.NegociacoesView($("#negociacaoview"), true);
                    this._negociacaoView.update(this._negociacoes);
                    this._mensagemView = new index_2.MensagemView($("#msg"));
                }
                adiciona(event) {
                    event.preventDefault();
                    let data = new Date(this._inputData.val().replace("/-/g", ","));
                    if (this._ehDiaUtil) {
                        this._mensagemView.update("Só é permitdo cadastrar operações em dias uteis");
                        return;
                    }
                    const negociacao = new index_1.Negociacao(data, parseInt(this._inputQuantidade.val()), parseFloat(this._inputValor.val()));
                    this._negociacoes.adiciona(negociacao);
                    this._negociacaoView.update(this._negociacoes);
                    this._mensagemView.update("Negociação adicionado com sucesso!");
                    this._limpaCampos();
                }
                _limpaCampos() {
                    this._inputData.value = "0";
                    this._inputQuantidade.value = "1";
                    this._inputValor.value = "0";
                    this._inputData.focus();
                }
                _ehDiaUtil(data) {
                    return data.getDay() == diaDaSemana.domingo || data.getDay() == diaDaSemana.sabado;
                }
            };
            __decorate([
                indexs_1.verificaTempoExecucao()
            ], NegociacaoController.prototype, "adiciona", null);
            exports_1("NegociacaoController", NegociacaoController);
            (function (diaDaSemana) {
                diaDaSemana[diaDaSemana["domingo"] = 0] = "domingo";
                diaDaSemana[diaDaSemana["segunda"] = 1] = "segunda";
                diaDaSemana[diaDaSemana["terca"] = 2] = "terca";
                diaDaSemana[diaDaSemana["quarta"] = 3] = "quarta";
                diaDaSemana[diaDaSemana["quinta"] = 4] = "quinta";
                diaDaSemana[diaDaSemana["sexta"] = 5] = "sexta";
                diaDaSemana[diaDaSemana["sabado"] = 6] = "sabado";
            })(diaDaSemana || (diaDaSemana = {}));
        }
    };
});
