import ScoreController from './ScoreController.js';
import SoalSatu from './SoalSatu.js';
import SoalDua from './SoalDua.js';
import SoalTiga from './SoalTiga.js';
import SoalEmpat from './SoalEmpat.js';

'use strict';


window.addEventListener('load', function(){

    const containerScore = document.getElementById('containerScore');
    const containerTitle = document.getElementById('containerTitle');
    const containerQuestion = document.getElementById('containerQuestion');
    const containerOptions = document.getElementById('containerOptions');
    const containerResult = document.getElementById('containerResult');

    const btnCheck = document.getElementById('btnCheck');
    const btnNext = document.getElementById('btnNext');
    const btnDialogOk = document.getElementById('btnDialogOk');
    const dialogResult = document.getElementById('dialogResult');

    const scoreController = new ScoreController(containerScore);
    scoreController.render();

    const questions = [];
    questions.push(new SoalSatu(containerQuestion, containerOptions));
    questions.push(new SoalDua(containerQuestion, containerOptions));
    questions.push(new SoalTiga(containerQuestion, containerOptions));
    questions.push(new SoalEmpat(containerQuestion, containerOptions));

    btnNext.style.display = 'none';

    let questionIndex = 0;

    containerTitle.innerHTML = 'Pertanyaan ' + (questionIndex + 1) + '/' + questions.length;
    questions[questionIndex].renderQuestion();
    questions[questionIndex].renderOptions();

    btnDialogOk.addEventListener('click', function(){
        
        dialogResult.style.display = 'none';    
    });

    btnCheck.addEventListener('click', function(){
        let jawaban = document.querySelector('input[name="pilihan"]:checked');

        if(jawaban != null){
            document.querySelectorAll('input[name="pilihan"]').forEach(item => item.disabled = true);

            let result = questions[questionIndex].checkAnswer(jawaban.value);
            containerResult.innerHTML = result.html;

            scoreController.add(result.score);
            scoreController.render();

            dialogResult.style.display = 'block';

            btnCheck.style.display = 'none';

            if(questionIndex < questions.length - 1){
                btnNext.style.display = 'block';
            }
        }else{
            alert('Pilih jawaban dulu.');
        }
    });    
    
    btnNext.addEventListener('click', function(){
        
        questionIndex++;
        containerTitle.innerHTML = 'Pertanyaan ' + (questionIndex + 1) + '/' + questions.length;
        questions[questionIndex].renderQuestion();
        questions[questionIndex].renderOptions();
        btnCheck.style.display = 'block';
        btnNext.style.display = 'none';
    
    });

    

})