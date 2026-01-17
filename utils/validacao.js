import { regras } from "./regras.js";

export function validaSenha(senha) {
  let erros = [];

  if (senha.length < regras.TamanhoMin) {
    erros.push("Senha muito curta");
  }

  if (!regras.numero.test(senha)) {
    erros.push("Senha precisa ter um número");
  }

  if (!regras.maiuscula.test(senha)) {
    erros.push("Senha precisa ter letra maiúscula");
  }

  if (!regras.minuscula.test(senha)) {
    erros.push("Senha precisa ter letra minúscula");
  }

  if (!regras.especial.test(senha)) {
    erros.push("Senha precisa ter caractere especial");
  }

  // if (erros.length === 0) {
  //   return "Senha válida!";
  // } else {
  //   for (const erro of erros) {
  //     console.log(erro);
  //   }
  // }
  return erros;
}
