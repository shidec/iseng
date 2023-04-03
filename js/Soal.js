class Soal {

    constructor(containerQuestion, containerOptions, question, options, score) {
		this.question = question;
        this.options = options;
        this.score = score;
	}

    renderQuestion(){        
        containerQuestion.innerHTML = this.question;
    }

    renderOptions(){
        let html = `<ol>`;

        this.options.forEach((element, index) => {
           html += `<li><input name="pilihan" type="radio" value="${index}"> ${element}</li>`; 
        });
        html += `</ol>`;

        containerOptions.innerHTML = html;

        return html;
    };
}

export default Soal;