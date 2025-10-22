export class PracticeAreas {
    render(): HTMLElement {
        const section = document.createElement('section');
        section.id = 'practice-areas';
        section.className = 'practice-areas section';
        section.innerHTML = `
            <div class="container">
                <div class="section-header">
                    <h2>PRACTICE AREAS</h2>
                    <div class="underline"></div>
                </div>
                <div class="practice-grid">
                    <div class="practice-card">
                        <div class="practice-image">
                            <div class="placeholder-image">SC</div>
                        </div>
                        <div class="practice-content">
                            <h3>Supreme Court</h3>
                            <p>
                                KBJ & CO represents its clients before the Supreme Court of India in cases 
                                pertaining to service & employment laws, labour & industrial laws, paramilitary 
                                forces employment disputes, property laws, matrimonial disputes, civil disputes 
                                and criminal trials.
                            </p>
                            <a href="#contact" class="learn-more">LEARN MORE</a>
                        </div>
                    </div>

                    <div class="practice-card reverse">
                        <div class="practice-content">
                            <h3>Delhi High Court</h3>
                            <p>
                                KBJ & CO represents its clients before the Delhi High Court in cases pertaining 
                                to service & employment laws, labour & industrial laws, paramilitary forces 
                                employment disputes, property laws, matrimonial disputes, civil disputes and 
                                criminal trials.
                            </p>
                            <a href="#contact" class="learn-more">LEARN MORE</a>
                        </div>
                        <div class="practice-image">
                            <div class="placeholder-image">HC</div>
                        </div>
                    </div>

                    <div class="practice-card">
                        <div class="practice-image">
                            <div class="placeholder-image">CAT</div>
                        </div>
                        <div class="practice-content">
                            <h3>Central Administrative Tribunal</h3>
                            <p>
                                KBJ & CO represents its clients before the Central Administrative Tribunal, 
                                Principal Bench, New Delhi, in cases pertaining to service and employment laws. 
                                The CAT was established under Article 323-A of the Constitution of India for 
                                adjudication of disputes with respect to recruitment and conditions of service.
                            </p>
                            <a href="#contact" class="learn-more">LEARN MORE</a>
                        </div>
                    </div>

                    <div class="practice-card reverse">
                        <div class="practice-content">
                            <h3>Delhi School Tribunal</h3>
                            <p>
                                KBJ & CO represents its clients before the Delhi School Tribunal, New Delhi, 
                                in cases pertaining to the Delhi School Education Act, 1973. The Tribunal 
                                adjudicates employment related disputes of employees of private schools 
                                (aided as well as unaided) in Delhi.
                            </p>
                            <a href="#contact" class="learn-more">LEARN MORE</a>
                        </div>
                        <div class="practice-image">
                            <div class="placeholder-image">DST</div>
                        </div>
                    </div>

                    <div class="practice-card">
                        <div class="practice-image">
                            <div class="placeholder-image">LC</div>
                        </div>
                        <div class="practice-content">
                            <h3>Labour Courts & Industrial Tribunals</h3>
                            <p>
                                KBJ & CO represents its clients before the Labour Courts and Industrial Tribunals 
                                in cases pertaining to The Industrial Disputes Act, 1947, The Payment of Gratuity 
                                Act, 1972, The Contract Labour (Regulation & Abolition) Act, 1970, etc.
                            </p>
                            <a href="#contact" class="learn-more">LEARN MORE</a>
                        </div>
                    </div>

                    <div class="practice-card reverse">
                        <div class="practice-content">
                            <h3>District Courts and Consumer Forums</h3>
                            <p>
                                KBJ & CO represents its clients before all the District Courts and Consumer 
                                Forums in cases pertaining to property disputes, consumer disputes, matrimonial 
                                disputes and criminal trials.
                            </p>
                            <a href="#contact" class="learn-more">LEARN MORE</a>
                        </div>
                        <div class="practice-image">
                            <div class="placeholder-image">DC</div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        return section;
    }
}
