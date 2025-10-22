export class Judgements {
    render(): HTMLElement {
        const section = document.createElement('section');
        section.id = 'judgements';
        section.className = 'judgements section';
        section.innerHTML = `
            <div class="container">
                <div class="info-grid">
                    <div class="info-card">
                        <div class="icon-wrapper">
                            <span class="icon">⚖️</span>
                        </div>
                        <h3>NOTED JUDGEMENT</h3>
                        <p>
                            The cases in which an important question of law of general importance has been 
                            decided by the Hon'ble Courts.
                        </p>
                        <a href="#contact" class="btn-secondary">VIEW MORE</a>
                    </div>

                    <div class="info-card">
                        <div class="icon-wrapper">
                            <span class="icon">📰</span>
                        </div>
                        <h3>NEWS REPORT</h3>
                        <p>
                            The socially significant cases fought by KBJ & CO have been reported by the 
                            electronic as well as print media on several occasions.
                        </p>
                        <a href="#contact" class="btn-secondary">VIEW MORE</a>
                    </div>

                    <div class="info-card">
                        <div class="icon-wrapper">
                            <span class="icon">ℹ️</span>
                        </div>
                        <h3>PUBLIC INFO</h3>
                        <p>
                            The court cases, documents, articles, etc. which are relevant for the 
                            information of the public at large.
                        </p>
                        <a href="#contact" class="btn-secondary">VIEW MORE</a>
                    </div>
                </div>
            </div>
        `;
        return section;
    }
}
