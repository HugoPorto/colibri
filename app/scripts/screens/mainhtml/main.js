this.showLoadFile();

var loki = require("lokijs");
var db = new loki("loki.json");
var fileExists = require('file-exists');

fileExists('./loki.json').then(exists => {
    if (exists == false) {        
        console.log("========fileExists()========");
        console.log("Criando banco de dados...");
        console.log("========fileExists()========");
        db.addCollection('clientes');
        db.addCollection('produtos');
        db.addCollection('vendas');
        db.save();
        console.log("========fileExists()========");
        console.log("Banco de dados criado com sucesso...");
        console.log("========fileExists()========");
    } else {
        console.log("========fileExists()========");
        console.log("O banco de dados já está criado e rodando...");
        console.log("========fileExists()========");
    }

    if (db.getCollection('clientes') == null) {
        var clientes = db.addCollection('clientes');
        db.save();
        alert('Coleção de clientes criada com sucesso...');
      }

      if (db.getCollection('produtos') == null) {
        var produtos = db.addCollection('produtos');
        db.save();
        alert('Coleção de produtos criada com sucesso...');
      }

      if (db.getCollection('vendas') == null) {
        var vendas = db.addCollection('vendas');
        db.save();
        alert('Coleção de vendas criada com sucesso...');
      }

      if (db.getCollection('clientes') == null) {
        var clientes = db.addCollection('clientes');
        db.save();
        alert('Coleção de clientes criada com sucesso...');
      }

});

function showLoadFile() {
    console.log("========showLoadFile()========");
    console.log("main carregado com sucesso...");
    console.log("========showLoadFile()========");
};