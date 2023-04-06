import Soal from './Soal.js';

class SoalSatu extends Soal {

    constructor(containerQuestion, containerOptions){
        super(containerQuestion, containerOptions, 'Presiden Indonesia pertama adalah  ...',['Sukarno', 'Suharto', 'Habibie', 'SBY', 'Jokowi'], 25);
    }

    checkAnswer(answer){
        let result;
        if(answer == 0){
            result = {
                    question: 'Presiden Indonesia pertama adalah ...',
                    html: '<img src="img/correct.png"/><div>Betul. Presiden Indonesia pertama adalah Sukarno.</div>',
                    score: this.score
                };
        }else{
            result = {
                    question: 'Presiden Indonesia pertama adalah ...',
                    html: '<img src="img/wrong.png"/><div>Salah. Presiden Indonesia pertama adalah Sukarno</div>',
                    score: 0
                };
        }
        return result;
    }
}

export default SoalSatu;