export class Team {
    render(): HTMLElement {
        const team = document.createElement('section');
        team.id = 'team';
        team.className = 'team section';
        team.innerHTML = `
            <div class="container">
                <div class="section-header">
                    <h2>EXPERIENCE TEAM</h2>
                    <div class="underline"></div>
                </div>
                <div class="team-grid">
                    <div class="team-member">
                        <div class="member-image">
                            <div class="placeholder-image">KBJ</div>
                        </div>
                        <h3>Senior Partner</h3>
                        <p class="designation">ADVOCATE</p>
                        <p class="description">Expert in Supreme Court litigation with over 25 years of experience in service and employment laws.</p>
                    </div>
                    <div class="team-member">
                        <div class="member-image">
                            <div class="placeholder-image">AP</div>
                        </div>
                        <h3>Associate Partner</h3>
                        <p class="designation">ADVOCATE</p>
                        <p class="description">Specializes in Delhi High Court cases, labour laws, and industrial disputes resolution.</p>
                    </div>
                    <div class="team-member">
                        <div class="member-image">
                            <div class="placeholder-image">JA</div>
                        </div>
                        <h3>Junior Advocate</h3>
                        <p class="designation">ADVOCATE</p>
                        <p class="description">Handles property disputes, matrimonial cases, and civil litigation matters.</p>
                    </div>
                    <div class="team-member">
                        <div class="member-image">
                            <div class="placeholder-image">SA</div>
                        </div>
                        <h3>Associate Counsel</h3>
                        <p class="designation">ADVOCATE</p>
                        <p class="description">Focuses on criminal trials, consumer disputes, and administrative tribunal cases.</p>
                    </div>
                </div>
                <div class="text-center">
                    <a href="#contact" class="btn-primary">View More Details</a>
                </div>
            </div>
        `;
        return team;
    }
}
