import Soal from './Soal.js';

class SoalSatu extends Soal {

    constructor(containerQuestion, containerOptions){
        super(containerQuestion, containerOptions, 'Yang bertugas mempercantik halaman web adalah ...',['HTML', 'CSS', 'JavaScript', 'PHP', 'Python'], 25);
    }

    checkAnswer(answer){
        let result;
        if(answer == 1){
            result = {
                    question: 'Yang bertugas mempercantik halaman web adalah ...',
                    html: '<img src="img/correct.png"/><div>Betul. Yang bertugas mempercantik halaman web adalah CSS</div>',
                    score: this.score
                };
        }else{
            result = {
                    question: 'Yang bertugas mempercantik halaman web adalah ...',
                    html: '<img src="img/wrong.png"/><div>Salah. Yang bertugas mempercantik halaman web adalah CSS</div>',
                    score: 0
                };
        }
        return result;
    }
}

export default SoalSatu;