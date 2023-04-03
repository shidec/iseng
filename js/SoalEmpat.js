import Soal from './Soal.js';

class SoalEmpat extends Soal {

    constructor(containerQuestion, containerOptions){
        super(containerQuestion, containerOptions, 'Presiden indonesia pertama adalah ...',['Sukarno', 'Suharto', 'Habibie', 'SBY', 'Jokowi'], 25);
    }

    checkAnswer(jawaban){
        let result;
        if(jawaban == 0){
            this.question = 'Presiden indonesia saat ini adalah ...';
                    
            result = {
                    html: '<img src="img/wrong.png"/><div>Salah. Presiden Indonesia saat ini adalah Jokowi.</div>',
                    score: 0
                };
        }else{            
            this.question = 'Presiden indonesia pertama adalah ...';
            result = {
                    html: '<img src="img/wrong.png"/><div>Salah. Presiden indonesia pertama adalah Sukarno.</div>',
                    score: 0
                };
        }

        this.renderQuestion();
        return result;
    }
}

export default SoalEmpat;