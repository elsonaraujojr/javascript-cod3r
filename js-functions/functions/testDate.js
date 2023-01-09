var mes = + new Date().getMonth();
var ano = new Date().getFullYear();
console.log(mes, ano);

class CriarExercicio {
  constructor(ano) {
    this.ano = ano,
    this.funcComBarra = function () {
      const comBarra = Array.from({ length: 12 }, (_, n) => {
        let date = new Date(ano, 0);
        date.setMonth(date.getMonth() + n);
        let month = String(date.getMonth() + 1).padStart(2, '0');
        return `${date.getFullYear()}/${month}`;
      });
      return comBarra;
    };

    this.funcSemBarra = function () {
      const semBarra = Array.from({ length: 12 }, (_, n) => {
        let date = new Date(ano, 0);
        date.setMonth(date.getMonth() + n);
        let month = String(date.getMonth() + 1).padStart(2, '0');
        return `${date.getFullYear()}${month}`;
      });
      return semBarra;
    };

    this.funcMesNumber = function () {
      const mesNumber = Array.from({ length: 12 }, (_, n) => {
        let date = new Date(ano, 0);
        date.setMonth(date.getMonth() + n);
        let month = String(date.getMonth() + 1).padStart(2, '0');
        return `${month}`;
      });
      return mesNumber;
    };

    this.funcObj = function () {
      const obj = Array.from({ length: 12 }, (_, n) => {
        let date = new Date(ano, 0);
        date.setMonth(date.getMonth() + n);
        // console.log("Aqui: ", date);
        let mesN = String(date.getMonth() + 1).padStart(2, '0')
        let mesC = `${date.getFullYear()}/${mesN}`
        let mesS = `${date.getFullYear()}${mesN}`;
        let mesD = date.toLocaleString("pt-BR", {
          month: "long",
        });
        return { mesN, mesS, mesC, mesD};
      });
      return obj;
    };
  }
}

const objFilter00 = new CriarExercicio(ano).funcComBarra();
console.log(objFilter00);

const objFilter01 = new CriarExercicio(ano).funcSemBarra();
console.log(objFilter01);

const objFilter03 = new CriarExercicio(ano).funcMesNumber();
console.log(objFilter03);

const objFilter04 = new CriarExercicio(ano).funcObj();
console.log(objFilter04);