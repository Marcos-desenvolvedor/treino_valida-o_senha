import { validaSenha } from "./utils/validacao.js";
import promptSync from "prompt-sync";

const prompt = promptSync();

function CriarSenha() {
  let senha = prompt("DIGITE SUA SENHA: ");
  let erros = validaSenha(senha);

  while (erros.length != 0) {
    for (const e of erros) {
      console.log("-", e);
    }

    senha = prompt("DIGITE SUA SENHA: ");
    erros = validaSenha(senha);
  }
  console.log("Senha Válida");
}

CriarSenha();
