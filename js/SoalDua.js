import Soal from './Soal.js';

class SoalDua extends Soal {

    constructor(containerQuestion, containerOptions){
        super(containerQuestion, containerOptions, 'Bulan terpendek adalah bulan ...',['Januari', 'Februari', 'Maret', 'April', 'Mei'], 25);
    }

    checkAnswer(jawaban){
        let result;
        if(jawaban == 1){
            result = {
                    html: '<img src="img/wrong.png"/><div>Salah. Bulan terpendek adalah bulan Mei (3 karakter).</div>',
                    score: 0
                };
        }else{
            result = {
                    html: '<img src="img/wrong.png"/><div>Salah. Bulan terpendek adalah bulan Februari (28/29 hari).</div>',
                    score: 0
                };
        }
        return result;
    }
}

export default SoalDua;