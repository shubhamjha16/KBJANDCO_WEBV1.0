# PowerShell script to create all 20 practice area pages with unique marketing content

$pages = @(
    @{
        file = "aviation.html"
        title = "Aviation Law"
        tagline = "Soaring Through Complex Aerospace Legal Landscapes"
        subtitle = "Comprehensive legal expertise for airlines, aircraft operators, manufacturers, and aviation stakeholders"
        icon = "✈"
        color = "#0040AA"
        intro1 = "In the dynamic world of aviation, legal complexities span international regulations, safety compliance, commercial transactions, and dispute resolution. KBJ & CO's Aviation practice delivers sophisticated legal counsel to airlines, aircraft manufacturers, lessors, airports, and aviation service providers."
        intro2 = "Our team combines deep technical understanding of aviation operations with cutting-edge legal expertise, ensuring your business stays compliant, competitive, and protected in this highly regulated industry."
        services = @(
            "Aircraft acquisition, financing, and leasing transactions",
            "Regulatory compliance and DGCA advisory services",
            "Aviation accident investigation and liability matters",
            "Commercial airline operations and route licensing",
            "Airport development and infrastructure projects",
            "International aviation agreements and treaties",
            "Employment law for aviation personnel",
            "Insurance claims and risk management",
            "Drone operations and UAV regulations",
            "MRO (Maintenance, Repair, Overhaul) agreements"
        )
        cards = @(
            @{title="Aircraft Transactions & Finance"; desc="Expert guidance on aircraft purchase, sale, leasing, and financing arrangements. We structure deals that optimize tax efficiency, manage risks, and ensure regulatory compliance."},
            @{title="Regulatory Compliance"; desc="Navigating DGCA regulations, obtaining Air Operator Certificates (AOC), route licenses, and ensuring compliance with aviation safety standards."},
            @{title="Aviation Litigation"; desc="Representing clients in complex aviation disputes including accident liability, commercial disagreements, passenger rights claims, and regulatory enforcement matters."}
        )
        why = "Aviation law demands precision, technical knowledge, and swift action. Our team has successfully represented major airlines in fleet acquisitions, defended operators in critical accident investigations, and secured route licenses that opened new markets."
    },
    @{
        file = "banking-finance.html"
        title = "Banking & Finance"
        tagline = "Powering Financial Innovation with Legal Excellence"
        subtitle = "Strategic legal solutions for banks, NBFCs, fintech companies, and financial institutions"
        icon = "💰"
        color = "#006A4E"
        intro1 = "India's financial services sector is experiencing unprecedented transformation with digital disruption, regulatory evolution, and innovative financial products. KBJ & CO's Banking & Finance practice provides comprehensive legal advisory to banks, non-banking financial companies (NBFCs), fintech startups, and institutional investors."
        intro2 = "From structuring complex financing transactions to navigating RBI regulations, our team delivers practical solutions that balance commercial objectives with regulatory compliance."
        services = @(
            "Project finance and structured lending",
            "NBFC licensing and RBI compliance",
            "Fintech regulatory advisory and licensing",
            "Securitization and asset reconstruction",
            "Payment systems and digital banking",
            "Trade finance and export credit",
            "Debt restructuring and recovery",
            "Banking litigation and enforcement",
            "Financial regulatory investigations",
            "Cross-border financing transactions"
        )
        cards = @(
            @{title="Project & Infrastructure Finance"; desc="Advising lenders and borrowers on large-scale project financing, syndicated loans, and infrastructure development transactions across sectors."},
            @{title="Fintech & Digital Banking"; desc="Pioneering legal advice for payment aggregators, neo-banks, P2P lending platforms, and digital wallet operators navigating RBI's evolving framework."},
            @{title="Debt Recovery & Restructuring"; desc="Strategic counsel on SARFAESI proceedings, IBC applications, OTS negotiations, and recovery strategies for stressed assets."}
        )
        why = "Our Banking & Finance team has advised on transactions worth over ₹10,000 crores, secured multiple NBFC licenses, and successfully represented clients before RBI, SEBI, and appellate tribunals."
    },
    @{
        file = "competition-law.html"
        title = "Competition Law"
        tagline = "Defending Fair Markets, Driving Business Growth"
        subtitle = "Expert anti-trust and competition law advisory for corporates navigating CCI regulations"
        icon = "⚖"
        color = "#8B0000"
        intro1 = "Competition law in India has evolved into a critical compliance area for businesses of all sizes. KBJ & CO's Competition Law practice helps clients navigate anti-competitive agreements, abuse of dominance investigations, and merger control filings before the Competition Commission of India (CCI)."
        intro2 = "We provide strategic counsel that protects your business interests while ensuring full compliance with competition regulations, from pre-transaction planning to dawn raid defense."
        services = @(
            "Merger control and CCI filings",
            "Anti-competitive agreement investigations",
            "Abuse of dominance advisory",
            "Cartel investigations and leniency applications",
            "Competition compliance programs",
            "Dawn raid response and defense",
            "CCI litigation and appeals",
            "Behavioral remedies and commitments",
            "Competition impact assessments",
            "International anti-trust coordination"
        )
        cards = @(
            @{title="Merger Control"; desc="End-to-end support for CCI notifications including green channel filings, Phase-II representations, and coordinating multi-jurisdiction approvals."},
            @{title="Cartel Defense"; desc="Representing clients in CCI cartel investigations, preparing leniency applications, and defending against penalty proceedings."},
            @{title="Compliance Programs"; desc="Designing and implementing competition compliance frameworks, training programs, and audit mechanisms tailored to your business."}
        )
        why = "We've successfully secured CCI approvals for 50+ merger transactions, defended clients in high-profile cartel investigations, and helped businesses save millions in potential penalties through proactive compliance."
    },
    @{
        file = "corporate-commercial.html"
        title = "Corporate & Commercial"
        tagline = "Building Businesses, Structuring Success"
        subtitle = "Comprehensive corporate advisory from startup formation to exit strategies"
        icon = "🏢"
        color = "#003366"
        intro1 = "Every business decision has legal implications. KBJ & CO's Corporate & Commercial practice serves as your strategic partner through all stages of your business lifecycle—from company incorporation and fundraising to joint ventures, M&A transactions, and corporate restructuring."
        intro2 = "We combine commercial acumen with legal precision to structure transactions that drive growth, mitigate risks, and create long-term value for shareholders."
        services = @(
            "Company incorporation and structuring",
            "Private equity and venture capital transactions",
            "Mergers, acquisitions, and takeovers",
            "Joint ventures and strategic alliances",
            "Corporate governance and compliance",
            "Foreign investment (FDI/FEMA) advisory",
            "Commercial contracts and negotiations",
            "Corporate restructuring and demergers",
            "Shareholders' agreements and disputes",
            "Due diligence and transaction advisory"
        )
        cards = @(
            @{title="M&A Transactions"; desc="End-to-end support for domestic and cross-border acquisitions, including target identification, due diligence, transaction structuring, and post-merger integration."},
            @{title="Startup & VC Advisory"; desc="Advising startups on incorporation, cap table management, ESOP schemes, fundraising rounds, and investor negotiations with founder-friendly terms."},
            @{title="Corporate Governance"; desc="Ensuring Companies Act compliance, board advisory, secretarial standards, related party transactions, and regulatory filings."}
        )
        why = "Our corporate team has closed transactions valued at over ₹5,000 crores, advised on 100+ fundraising rounds, and helped businesses navigate complex regulatory approvals across multiple jurisdictions."
    },
    @{
        file = "data-protection.html"
        title = "Data Protection & Privacy"
        tagline = "Securing Data, Protecting Privacy, Building Trust"
        subtitle = "Comprehensive data privacy and cybersecurity law advisory in the digital age"
        icon = "🔒"
        color = "#2C3E50"
        intro1 = "With India's Digital Personal Data Protection Act (DPDPA) 2023 coming into force, data protection has become a board-level priority. KBJ & CO's Data Protection practice helps organizations achieve compliance, manage data breaches, and build privacy-first business models."
        intro2 = "From conducting privacy impact assessments to handling data breach notifications, we provide end-to-end advisory that protects your business from regulatory penalties and reputational damage."
        services = @(
            "DPDPA compliance and advisory",
            "Privacy policy drafting and review",
            "Data Protection Impact Assessments (DPIA)",
            "Data breach response and notification",
            "Cross-border data transfer mechanisms",
            "Consent management frameworks",
            "Vendor data processing agreements",
            "Data localization compliance",
            "Privacy by design implementation",
            "Cybersecurity incident response"
        )
        cards = @(
            @{title="DPDPA Compliance"; desc="Comprehensive compliance roadmap including data mapping, consent mechanisms, user rights implementation, and Data Protection Officer appointment."},
            @{title="Breach Response"; desc="24/7 incident response support for data breaches including forensic coordination, regulatory notifications, and communication strategy."},
            @{title="International Transfers"; desc="Structuring cross-border data flows through Standard Contractual Clauses, Binding Corporate Rules, and adequacy assessments."}
        )
        why = "We've helped 200+ organizations achieve data protection compliance, managed high-stakes breach incidents, and successfully defended clients in privacy investigations."
    },
    @{
        file = "dispute-resolution.html"
        title = "Dispute Resolution"
        tagline = "Resolving Conflicts, Protecting Interests"
        subtitle = "Strategic litigation and alternative dispute resolution across all forums"
        icon = "⚔"
        color = "#8B4513"
        intro1 = "When disputes arise, you need advocates who combine legal expertise with commercial pragmatism. KBJ & CO's Dispute Resolution practice represents clients in complex commercial litigation, arbitration, and mediation across High Courts, Supreme Court, and specialized tribunals."
        intro2 = "Our litigators are known for aggressive advocacy, meticulous preparation, and an unwavering commitment to protecting our clients' interests."
        services = @(
            "Commercial litigation in High Courts and Supreme Court",
            "Domestic and international arbitration",
            "Shareholder and partnership disputes",
            "Contractual disputes and enforcement",
            "Insolvency & bankruptcy proceedings",
            "Regulatory and white-collar investigations",
            "Alternative dispute resolution (ADR)",
            "Injunction and interim relief applications",
            "Enforcement of arbitral awards",
            "Appellate practice and strategy"
        )
        cards = @(
            @{title="Complex Commercial Litigation"; desc="Representing clients in high-value commercial disputes including breach of contract, fraud claims, and business torts before all judicial forums."},
            @{title="Arbitration Expertise"; desc="Conducting and defending arbitration proceedings under ICC, SIAC, and Indian arbitration rules with proven track record in award enforcement."},
            @{title="Insolvency Proceedings"; desc="Strategic counsel in IBC matters including CIRP, liquidation, pre-packaged schemes, and creditor negotiations."}
        )
        why = "Our disputes team has successfully resolved cases worth over ₹2,000 crores, secured favorable arbitral awards in 85% of proceedings, and achieved landmark Supreme Court victories."
    },
    @{
        file = "employment-labour.html"
        title = "Employment & Labour"
        tagline = "Empowering Workplaces, Protecting Rights"
        subtitle = "Comprehensive employment law advisory for modern workplaces"
        icon = "👥"
        color = "#4A5568"
        intro1 = "India's employment landscape is rapidly evolving with new labour codes, remote work policies, and gig economy regulations. KBJ & CO's Employment & Labour practice provides strategic counsel on workforce management, compliance, and dispute resolution."
        intro2 = "From drafting employment contracts to defending wrongful termination claims, we help employers build compliant, productive workplaces while protecting employee rights."
        services = @(
            "Labour law compliance and audits",
            "Employment contracts and policies",
            "Termination and retrenchment advisory",
            "Industrial disputes and strikes",
            "Sexual harassment (POSH) compliance",
            "Employee Stock Option Plans (ESOPs)",
            "Non-compete and confidentiality agreements",
            "Wage and hour compliance",
            "Trade union negotiations",
            "Employment litigation and arbitration"
        )
        cards = @(
            @{title="Labour Code Compliance"; desc="Ensuring compliance with new labour codes including wage code, industrial relations code, social security code, and OSH code."},
            @{title="POSH Advisory"; desc="Setting up Internal Complaints Committees, conducting training programs, and managing sexual harassment investigations and inquiries."},
            @{title="Termination Strategy"; desc="Advisory on retrenchment, layoffs, voluntary separation schemes, and defending wrongful termination claims before labour courts."}
        )
        why = "We've advised on workforce restructuring for 50+ companies, successfully defended employers in 200+ labour disputes, and implemented POSH frameworks for organizations with 10,000+ employees."
    },
    @{
        file = "energy.html"
        title = "Energy & Natural Resources"
        tagline = "Powering Growth in the Energy Sector"
        subtitle = "Legal excellence in renewable energy, oil & gas, and power sector transactions"
        icon = "⚡"
        color = "#FF6B00"
        intro1 = "India's energy sector is undergoing a historic transformation with massive investments in renewable energy, grid modernization, and energy storage. KBJ & CO's Energy practice advises developers, investors, utilities, and government entities on project development, regulatory compliance, and transactions."
        intro2 = "From solar and wind projects to coal mining and power trading, we provide comprehensive legal support across the energy value chain."
        services = @(
            "Renewable energy project development",
            "Power Purchase Agreements (PPAs)",
            "Oil & gas exploration and licensing",
            "Energy regulatory compliance",
            "Grid connection and transmission agreements",
            "Mining law and mineral rights",
            "Energy storage and battery projects",
            "Carbon credits and ESG advisory",
            "Power sector disputes and arbitration",
            "Foreign investment in energy sector"
        )
        cards = @(
            @{title="Renewable Energy Projects"; desc="End-to-end legal support for solar, wind, and hybrid renewable projects including land acquisition, regulatory approvals, and financing."},
            @{title="Power Trading & PPAs"; desc="Drafting and negotiating power purchase agreements, RECs trading, and energy banking arrangements with utilities and open access consumers."},
            @{title="Mining & Resources"; desc="Advisory on coal and mineral licensing, captive mining operations, auction processes, and environmental clearances."}
        )
        why = "Our energy team has advised on projects with combined capacity exceeding 5 GW, structured PPAs worth ₹20,000+ crores, and secured critical regulatory approvals from CERC, SERC, and MoEF."
    },
    @{
        file = "hotels-hospitality.html"
        title = "Hotels & Hospitality"
        tagline = "Elevating Hospitality Through Legal Excellence"
        subtitle = "Comprehensive legal solutions for hotels, resorts, restaurants, and tourism businesses"
        icon = "🏨"
        color = "#9B59B6"
        intro1 = "The hospitality sector faces unique legal challenges from licensing and compliance to property transactions and franchise agreements. KBJ & CO's Hotels & Hospitality practice serves leading hotel chains, independent properties, restaurant groups, and tourism operators."
        intro2 = "We understand the commercial dynamics of hospitality business and provide practical legal solutions that enable growth while managing regulatory, operational, and reputational risks."
        services = @(
            "Hotel management and franchise agreements",
            "Tourism and hospitality licensing",
            "Property acquisition and leasing",
            "Food safety and FSSAI compliance",
            "Liquor licensing and excise matters",
            "Employment and labour law for hospitality",
            "Guest liability and insurance",
            "Branding and trademark protection",
            "Timeshare and vacation ownership",
            "Hospitality M&A and investments"
        )
        cards = @(
            @{title="Hotel Agreements"; desc="Drafting and negotiating management agreements, franchise agreements, operating agreements, and revenue-sharing arrangements with hotel brands."},
            @{title="Licensing & Compliance"; desc="Securing tourism licenses, FSSAI certifications, liquor permits, fire safety approvals, and environmental clearances for hospitality properties."},
            @{title="Property Transactions"; desc="Advisory on hotel acquisitions, leasehold conversions, joint development agreements, and asset-light expansion strategies."}
        )
        why = "We've advised on hospitality transactions worth ₹1,500+ crores, secured licenses for 100+ properties, and helped clients navigate complex lease negotiations across prime locations."
    },
    @{
        file = "infrastructure-construction.html"
        title = "Infrastructure & Construction"
        tagline = "Building India's Future, One Project at a Time"
        subtitle = "End-to-end legal support for infrastructure development and construction projects"
        icon = "🏗"
        color = "#E67E22"
        intro1 = "India's infrastructure boom presents immense opportunities and complex legal challenges. KBJ & CO's Infrastructure & Construction practice advises developers, contractors, government agencies, and lenders on projects spanning roads, metros, airports, ports, and smart cities."
        intro2 = "From bid management to dispute resolution, we provide comprehensive legal support that ensures project delivery while protecting our clients' interests."
        services = @(
            "PPP and concession agreements",
            "EPC and construction contracts",
            "Project financing and security",
            "Land acquisition and clearances",
            "Environmental and regulatory approvals",
            "Construction disputes and arbitration",
            "Joint ventures and consortium agreements",
            "Government procurement and tenders",
            "Claims management and delay analysis",
            "Real estate development"
        )
        cards = @(
            @{title="PPP Projects"; desc="Structuring Public-Private Partnership projects, drafting concession agreements, and advising on VGF schemes, HAM models, and BOT structures."},
            @{title="Construction Contracts"; desc="Negotiating EPC contracts, supply agreements, subcontracting arrangements, and managing claims for time/cost overruns."},
            @{title="Dispute Resolution"; desc="Resolving construction disputes through arbitration, adjudication, and litigation including delay claims, quality issues, and payment disputes."}
        )
        why = "Our infrastructure team has advised on projects worth ₹50,000+ crores, successfully closed multiple PPP transactions, and resolved construction disputes valued at ₹5,000+ crores."
    },
    @{
        file = "insurance-reinsurance.html"
        title = "Insurance & Reinsurance"
        tagline = "Protecting What Matters Most"
        subtitle = "Specialized legal advisory for insurers, reinsurers, brokers, and policyholders"
        icon = "🛡"
        color = "#16A085"
        intro1 = "Insurance law in India is witnessing significant evolution with product innovation, digital distribution, and evolving IRDAI regulations. KBJ & CO's Insurance practice serves insurance companies, reinsurers, TPAs, brokers, and corporate policyholders across life, general, and health insurance segments."
        intro2 = "We provide strategic counsel on regulatory compliance, policy disputes, claims litigation, and transactional matters that shape the insurance industry."
        services = @(
            "IRDAI licensing and compliance",
            "Insurance policy drafting and review",
            "Claims litigation and arbitration",
            "Reinsurance treaty negotiations",
            "Bancassurance and distribution agreements",
            "Insurance fraud investigations",
            "Product approval and filing",
            "Insurance M&A transactions",
            "Consumer disputes and ombudsman proceedings",
            "Insurance regulatory advisory"
        )
        cards = @(
            @{title="Regulatory Compliance"; desc="Advising insurers on IRDAI regulations including solvency margins, investment norms, outsourcing guidelines, and corporate governance requirements."},
            @{title="Claims Defense"; desc="Defending insurers in complex claims litigation including policy interpretation, fraud allegations, and bad faith claims before courts and consumer forums."},
            @{title="Reinsurance Advisory"; desc="Structuring reinsurance programs, negotiating treaty and facultative arrangements, and resolving reinsurance disputes."}
        )
        why = "We've represented insurers in claims worth ₹1,000+ crores, secured IRDAI approvals for new products and licenses, and successfully defended clients in high-stakes fraud investigations."
    },
    @{
        file = "intellectual-property.html"
        title = "Intellectual Property"
        tagline = "Protecting Innovation, Defending Creativity"
        subtitle = "Comprehensive IP strategy, protection, and enforcement across all jurisdictions"
        icon = "💡"
        color = "#9B59B6"
        intro1 = "In the knowledge economy, intellectual property is often a company's most valuable asset. KBJ & CO's IP practice helps businesses protect, monetize, and enforce their patents, trademarks, copyrights, and trade secrets across India and globally."
        intro2 = "From IP portfolio management to defending against infringement, we combine legal expertise with commercial insight to maximize the value of your intellectual property."
        services = @(
            "Patent prosecution and strategy",
            "Trademark registration and protection",
            "Copyright registration and enforcement",
            "Trade secret protection",
            "IP licensing and technology transfer",
            "IP due diligence and valuation",
            "Domain name disputes and cybersquatting",
            "Counterfeiting and anti-piracy actions",
            "IP litigation and enforcement",
            "Open source and software licensing"
        )
        cards = @(
            @{title="Patent Strategy"; desc="Advising on patent filing strategies, conducting freedom-to-operate searches, prosecuting patent applications, and defending against patent infringement claims."},
            @{title="Brand Protection"; desc="Comprehensive trademark portfolio management including clearance searches, registration, oppositions, cancellations, and enforcement against counterfeiters."},
            @{title="IP Litigation"; desc="Aggressive enforcement of IP rights through infringement suits, John Doe orders, Anton Piller orders, and criminal prosecutions for counterfeiting."}
        )
        why = "We've secured 500+ trademark registrations, successfully litigated patent disputes worth ₹500+ crores, and helped clients recover millions through IP monetization strategies."
    },
    @{
        file = "media-entertainment.html"
        title = "Media & Entertainment"
        tagline = "Where Creativity Meets Legal Protection"
        subtitle = "Legal excellence for film, music, OTT, gaming, and digital content industries"
        icon = "🎬"
        color = "#E74C3C"
        intro1 = "India's media and entertainment industry is booming with OTT platforms, digital content creation, and global collaborations. KBJ & CO's Media & Entertainment practice serves production houses, broadcasters, OTT platforms, artists, music labels, and content creators."
        intro2 = "From film financing to content licensing, celebrity endorsements to defamation defense—we provide comprehensive legal support that protects creative expression while managing legal and business risks."
        services = @(
            "Film and TV production agreements",
            "OTT platform content licensing",
            "Music licensing and royalty agreements",
            "Celebrity endorsement and brand partnerships",
            "Broadcasting and telecasting rights",
            "Defamation and privacy litigation",
            "Content censorship and regulatory compliance",
            "Gaming law and esports advisory",
            "Talent contracts and union negotiations",
            "Media M&A and investments"
        )
        cards = @(
            @{title="Content Production"; desc="Drafting production agreements, co-production arrangements, crew contracts, location agreements, and securing E&O insurance for film and TV projects."},
            @{title="Digital Media & OTT"; desc="Advisory on content acquisition, licensing agreements, subscriber terms, content moderation policies, and regulatory compliance for streaming platforms."},
            @{title="Rights & Licensing"; desc="Negotiating music synchronization licenses, theatrical distribution rights, satellite rights, digital rights, and merchandising agreements."}
        )
        why = "We've advised on productions with budgets exceeding ₹500 crores, negotiated landmark OTT deals, and successfully defended high-profile defamation cases for celebrities and media houses."
    },
    @{
        file = "real-estate.html"
        title = "Real Estate"
        tagline = "Building Value Through Strategic Real Estate Advisory"
        subtitle = "Comprehensive legal solutions for developers, investors, and property transactions"
        icon = "🏘"
        color = "#27AE60"
        intro1 = "Real estate transactions in India involve complex title verification, regulatory approvals, and contractual negotiations. KBJ & CO's Real Estate practice serves developers, investors, REITs, and property buyers across residential, commercial, and industrial segments."
        intro2 = "From land acquisition to project approvals, joint development agreements to RERA compliance—we provide end-to-end legal support that protects your investment and accelerates project delivery."
        services = @(
            "Title due diligence and clearance",
            "Real estate acquisitions and sales",
            "Joint development agreements (JDA)",
            "RERA registration and compliance",
            "Property financing and mortgages",
            "Construction and development agreements",
            "Lease agreements and tenancy disputes",
            "Real estate litigation",
            "REIT structuring and advisory",
            "Foreign investment in real estate"
        )
        cards = @(
            @{title="Title Due Diligence"; desc="Comprehensive title searches, encumbrance verification, stamp duty analysis, and legal opinions ensuring clean and marketable title."},
            @{title="Development Agreements"; desc="Structuring joint development, collaboration, and redevelopment agreements with risk allocation, revenue sharing, and exit mechanisms."},
            @{title="RERA Compliance"; desc="Project registration, quarterly filings, escrow account management, and handling buyer complaints before state RERA authorities."}
        )
        why = "We've conducted due diligence on properties worth ₹10,000+ crores, structured 50+ JDAs, and successfully resolved complex title disputes enabling project execution."
    },
    @{
        file = "restructuring-insolvency.html"
        title = "Restructuring & Insolvency"
        tagline = "Turning Crisis into Opportunity"
        subtitle = "Strategic counsel for debt restructuring, insolvency resolution, and business turnaround"
        icon = "🔄"
        color = "#34495E"
        intro1 = "The Insolvency and Bankruptcy Code (IBC) has transformed India's debt resolution landscape. KBJ & CO's Restructuring & Insolvency practice advises creditors, debtors, resolution applicants, and insolvency professionals on CIRP proceedings, liquidation, and out-of-court restructuring."
        intro2 = "Whether you're a stressed company seeking resolution, a creditor protecting your interests, or an investor eyeing distressed assets—we provide strategic counsel that maximizes recoveries and enables business continuity."
        services = @(
            "Corporate Insolvency Resolution Process (CIRP)",
            "Liquidation proceedings",
            "Pre-packaged insolvency schemes",
            "One-time settlement (OTS) negotiations",
            "Creditor committee representation",
            "Resolution plan drafting and approval",
            "SARFAESI Act proceedings",
            "DRT litigation and appeals",
            "Cross-border insolvency",
            "Insolvency professional advisory"
        )
        cards = @(
            @{title="CIRP Advisory"; desc="Representing financial and operational creditors in CIRP proceedings, CoC meetings, resolution plan evaluation, and NCLT hearings."},
            @{title="Resolution Planning"; desc="Drafting and negotiating resolution plans, conducting due diligence on stressed assets, and structuring bids for distressed asset acquisitions."},
            @{title="Debt Restructuring"; desc="Advisory on out-of-court settlements, SDR/S4A schemes, OTS negotiations with banks and ARCs, and corporate debt restructuring."}
        )
        why = "We've successfully represented clients in IBC proceedings involving ₹15,000+ crores, achieved favorable resolution plans, and helped creditors maximize recoveries in liquidation scenarios."
    },
    @{
        file = "shipping.html"
        title = "Shipping & Maritime"
        tagline = "Navigating the Legal Waters of Maritime Commerce"
        subtitle = "Comprehensive maritime law advisory for ship owners, charterers, and cargo interests"
        icon = "⚓"
        color = "#16537E"
        intro1 = "India's shipping industry handles over 90% of the country's trade by volume. KBJ & CO's Shipping & Maritime practice provides specialized legal counsel on admiralty matters, shipping contracts, maritime disputes, and regulatory compliance."
        intro2 = "From ship arrests to cargo claims, charterparty disputes to maritime financing—we deliver expert legal solutions that protect your interests in the complex world of maritime commerce."
        services = @(
            "Admiralty and maritime litigation",
            "Ship arrest and release proceedings",
            "Charterparty disputes and arbitration",
            "Cargo claims and Bill of Lading disputes",
            "Marine insurance claims",
            "Ship financing and mortgages",
            "Maritime regulatory compliance",
            "Port and terminal agreements",
            "Salvage and collision matters",
            "Offshore drilling and vessel operations"
        )
        cards = @(
            @{title="Ship Arrests"; desc="Swift legal action for vessel arrests, securing maritime liens, obtaining interim relief, and defending against wrongful arrest claims before High Courts."},
            @{title="Charterparty Disputes"; desc="Resolving disputes under time charter, voyage charter, and bareboat charter agreements through arbitration and litigation."},
            @{title="Cargo Claims"; desc="Representing cargo owners, carriers, and insurers in claims for damage, loss, short delivery, and contamination under Bills of Lading."}
        )
        why = "We've successfully handled ship arrests worth millions of dollars, represented clients in complex arbitrations under London and Singapore rules, and achieved favorable settlements in major collision cases."
    },
    @{
        file = "tax.html"
        title = "Tax Law"
        tagline = "Strategic Tax Planning, Compliance, and Controversy"
        subtitle = "Comprehensive tax advisory for businesses navigating India's complex tax landscape"
        icon = "📊"
        color = "#D35400"
        intro1 = "India's tax regime—spanning GST, Income Tax, International Tax, and Customs—requires sophisticated planning and compliance. KBJ & CO's Tax practice advises corporates, startups, HNIs, and foreign investors on tax structuring, dispute resolution, and regulatory compliance."
        intro2 = "From transfer pricing to GST litigation, advance tax rulings to international tax treaties—we provide strategic counsel that optimizes tax efficiency while managing litigation risks."
        services = @(
            "Direct tax advisory and planning",
            "GST compliance and litigation",
            "Transfer pricing documentation and defense",
            "International tax and treaty advisory",
            "Tax due diligence for M&A transactions",
            "Customs and excise advisory",
            "Tax assessments and appeals",
            "Advance tax rulings (AAR)",
            "Tax dispute resolution and settlements",
            "Wealth tax and estate planning"
        )
        cards = @(
            @{title="GST Advisory"; desc="Comprehensive GST compliance including registration, return filing, input tax credit optimization, GST audits, and appellate representation."},
            @{title="Transfer Pricing"; desc="Preparing TP documentation, benchmarking studies, defending TP adjustments before tax authorities, and APA applications."},
            @{title="Tax Litigation"; desc="Representing clients before Income Tax Appellate Tribunals, High Courts, and Supreme Court in complex tax disputes and constitutional challenges."}
        )
        why = "Our tax team has successfully defended assessments worth ₹5,000+ crores, secured favorable advance rulings, and helped clients achieve significant tax savings through strategic restructuring."
    },
    @{
        file = "trade-transport.html"
        title = "Trade & Transport"
        tagline = "Facilitating Global Commerce, Enabling Trade Flows"
        subtitle = "Legal expertise in international trade, logistics, and cross-border transactions"
        icon = "🚚"
        color = "#1ABC9C"
        intro1 = "International trade involves complex regulatory frameworks, customs regulations, and multi-jurisdictional contracts. KBJ & CO's Trade & Transport practice advises exporters, importers, logistics companies, and freight forwarders on trade finance, customs disputes, and transport contracts."
        intro2 = "From FEMA compliance to trade remedy investigations, letters of credit to freight claims—we provide comprehensive legal support that facilitates seamless trade operations."
        services = @(
            "International trade agreements",
            "Export-import regulations and compliance",
            "Customs disputes and litigation",
            "Trade finance documentation (LC/BG)",
            "Logistics and freight contracts",
            "Warehousing and cold storage agreements",
            "Trade remedy investigations (AD/CVD/Safeguards)",
            "FEMA compliance for trade transactions",
            "Transport liability and cargo insurance",
            "Free trade agreement advisory"
        )
        cards = @(
            @{title="Customs Advisory"; desc="Advisory on tariff classification, valuation disputes, duty drawback, export incentives, and representation in customs investigations and adjudications."},
            @{title="Trade Finance"; desc="Drafting and reviewing letters of credit, bank guarantees, trade credit insurance, and resolving documentary credit disputes."},
            @{title="Logistics Contracts"; desc="Negotiating freight forwarding agreements, multimodal transport contracts, warehouse agreements, and resolving cargo damage claims."}
        )
        why = "We've successfully defended customs disputes worth ₹1,000+ crores, advised on trade finance transactions across 20+ countries, and helped clients navigate complex anti-dumping investigations."
    },
    @{
        file = "trusts-charities.html"
        title = "Trusts & Charities"
        tagline = "Empowering Philanthropy Through Legal Excellence"
        subtitle = "Comprehensive advisory for trusts, NGOs, foundations, and charitable organizations"
        icon = "🤝"
        color = "#8E44AD"
        intro1 = "India's philanthropic sector plays a vital role in social development, education, healthcare, and community welfare. KBJ & CO's Trusts & Charities practice advises trusts, Section 8 companies, NGOs, and charitable foundations on registration, compliance, governance, and regulatory matters."
        intro2 = "From trust deed drafting to FCRA compliance, tax exemptions to dispute resolution—we help philanthropic organizations focus on their mission while ensuring full legal compliance."
        services = @(
            "Trust and Section 8 company formation",
            "FCRA registration and compliance",
            "Tax exemption (12A/80G) applications",
            "CSR advisory and compliance",
            "Trust deed and memorandum drafting",
            "Charitable trust litigation",
            "Regulatory compliance and filings",
            "Trustee disputes and succession",
            "Grant agreements and donor advisory",
            "Charitable asset management"
        )
        cards = @(
            @{title="Trust Formation"; desc="Structuring trusts, societies, and Section 8 companies, drafting governing documents, and securing registrations under Income Tax and Charity Commissioner."},
            @{title="FCRA Compliance"; desc="Advisory on foreign contribution regulations including FCRA registration, renewal, compliance filings, and handling FCRA investigations."},
            @{title="Tax Exemptions"; desc="Securing and maintaining 12A, 80G, and other tax exemptions, filing annual returns, and defending against cancellation proceedings."}
        )
        why = "We've established 100+ charitable organizations, secured FCRA approvals for 50+ entities, and successfully resolved complex trustee disputes protecting charitable assets worth ₹500+ crores."
    },
    @{
        file = "wills-estate-planning.html"
        title = "Wills & Estate Planning"
        tagline = "Securing Your Legacy, Protecting Your Loved Ones"
        subtitle = "Comprehensive estate planning, succession advisory, and wealth transfer strategies"
        icon = "📜"
        color = "#7D3C98"
        intro1 = "Effective estate planning ensures your wealth is transferred according to your wishes while minimizing tax implications and family disputes. KBJ & CO's Wills & Estate Planning practice advises HNIs, business families, and individuals on succession planning, will drafting, and probate matters."
        intro2 = "From complex family settlements to international estate planning, we provide discreet, personalized counsel that protects your legacy and ensures smooth wealth transition across generations."
        services = @(
            "Will drafting and execution",
            "Probate and letters of administration",
            "Succession planning for business families",
            "Family settlements and partition deeds",
            "Trust-based estate planning",
            "Inheritance tax planning",
            "Testamentary disputes and will contests",
            "Power of attorney and guardianship",
            "Cross-border estate planning",
            "Charitable bequests advisory"
        )
        cards = @(
            @{title="Will Drafting"; desc="Preparing legally sound wills tailored to your family structure, business interests, and philanthropic goals with provisions for executors and guardians."},
            @{title="Probate Services"; desc="Handling probate applications, obtaining succession certificates, resolving will disputes, and ensuring smooth estate administration."},
            @{title="Business Succession"; desc="Structuring succession plans for family businesses including shareholding transfers, management transition, and dispute resolution mechanisms."}
        )
        why = "We've advised on estate planning for assets worth ₹2,000+ crores, successfully probated complex wills, and helped business families achieve smooth generational transitions without disputes."
    }
)

# Generate each practice area page
foreach ($page in $pages) {
    $servicesHtml = ($page.services | ForEach-Object { "                <li>$_</li>" }) -join "`n"
    $cardsHtml = ($page.cards | ForEach-Object { @"
                <div class="expertise-card">
                    <h3>$($_.title)</h3>
                    <p>$($_.desc)</p>
                </div>
"@ }) -join "`n"

    $htmlContent = @"
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>$($page.title) - KBJ & CO</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #1d1d1f; }
        .practice-hero {
            position: relative; min-height: 75vh; display: flex; align-items: center; justify-content: center; text-align: center;
            background: linear-gradient(135deg, rgba(0, 40, 85, 0.92) 0%, $($page.color + '88') 100%), 
                        url('/images/practice/$($page.file.Replace('.html', ''))-bg.jpg') center/cover;
            color: white; padding: 60px 20px; overflow: hidden;
        }
        .practice-hero::before {
            content: ''; position: absolute; top: 0; left: 0; right: 0; bottom: 0;
            background: radial-gradient(circle at top right, $($page.color + '40'), transparent 60%);
        }
        .hero-content { position: relative; z-index: 1; max-width: 1000px; animation: fadeInUp 1s ease; }
        .practice-hero h1 { font-size: 5rem; font-weight: 800; margin-bottom: 30px; letter-spacing: -3px; }
        .practice-hero .tagline { font-size: 1.8rem; margin-bottom: 20px; opacity: 0.95; font-weight: 300; }
        .practice-hero .subtitle { font-size: 1.2rem; opacity: 0.85; max-width: 800px; margin: 0 auto; }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        .container { max-width: 1400px; margin: 0 auto; padding: 100px 40px; }
        .content-section { background: white; border-radius: 30px; padding: 80px; margin-bottom: 50px;
                          box-shadow: 0 20px 60px rgba(0,0,0,0.08); border-left: 5px solid $($page.color); }
        .content-section h2 { font-size: 3rem; margin-bottom: 30px; color: #1d1d1f; font-weight: 700; }
        .content-section p { font-size: 1.2rem; line-height: 2; color: #424245; margin-bottom: 25px; }
        .expertise-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 40px; margin-top: 60px; }
        .expertise-card { padding: 45px; background: linear-gradient(145deg, #f8f9fa, #ffffff); border-radius: 25px;
                         border: 1px solid #e5e5e7; transition: all 0.4s ease; position: relative; overflow: hidden; }
        .expertise-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 4px;
                                 background: linear-gradient(90deg, $($page.color), $($page.color + 'CC')); transform: scaleX(0); transition: transform 0.4s; }
        .expertise-card:hover::before { transform: scaleX(1); }
        .expertise-card:hover { transform: translateY(-10px); box-shadow: 0 30px 60px $($page.color + '26'); }
        .expertise-card h3 { font-size: 1.8rem; margin-bottom: 20px; color: $($page.color); font-weight: 600; }
        .expertise-card p { font-size: 1.05rem; color: #6e6e73; line-height: 1.8; }
        .highlight-section { background: linear-gradient(135deg, #1d1d1f, #2d2d2f); color: white; border-radius: 30px;
                           padding: 80px; margin: 60px 0; position: relative; overflow: hidden; }
        .highlight-section::after { content: ''; position: absolute; top: -50%; right: -50%; width: 100%; height: 200%;
                                   background: radial-gradient(circle, $($page.color + '1A'), transparent 70%); }
        .highlight-section h2 { color: white; position: relative; z-index: 1; font-size: 3rem; margin-bottom: 40px; }
        .highlight-section ul { list-style: none; position: relative; z-index: 1; }
        .highlight-section li { font-size: 1.2rem; padding: 20px 0; border-bottom: 1px solid rgba(255,255,255,0.1);
                               padding-left: 50px; position: relative; }
        .highlight-section li::before { content: '$($page.icon)'; position: absolute; left: 0; color: $($page.color); font-size: 1.5rem; }
        .cta-section { text-align: center; padding: 120px 40px; background: linear-gradient(135deg, $($page.color), $($page.color + 'DD'));
                      color: white; border-radius: 30px; margin: 60px 40px; }
        .cta-section h2 { font-size: 3.5rem; margin-bottom: 30px; font-weight: 700; }
        .cta-section p { font-size: 1.3rem; margin-bottom: 50px; opacity: 0.9; }
        .cta-button { display: inline-block; padding: 22px 60px; background: white; color: $($page.color); text-decoration: none;
                     border-radius: 50px; font-size: 1.3rem; font-weight: 600; transition: all 0.3s ease; box-shadow: 0 10px 40px rgba(0,0,0,0.2); }
        .cta-button:hover { transform: translateY(-3px); box-shadow: 0 20px 60px rgba(0,0,0,0.3); }
        .back-button { display: inline-block; margin: 60px 20px; padding: 16px 40px; background: #1d1d1f; color: white;
                      text-decoration: none; border-radius: 30px; transition: all 0.3s ease; font-weight: 500; }
        .back-button:hover { background: $($page.color); transform: translateX(-5px); }
        @media (max-width: 768px) {
            .practice-hero h1 { font-size: 3rem; }
            .practice-hero .tagline { font-size: 1.3rem; }
            .content-section, .highlight-section { padding: 40px; }
            .expertise-grid { grid-template-columns: 1fr; }
        }
    </style>
</head>
<body>
    <div class="practice-hero">
        <div class="hero-content">
            <h1>$($page.title)</h1>
            <p class="tagline">$($page.tagline)</p>
            <p class="subtitle">$($page.subtitle)</p>
        </div>
    </div>

    <div class="container">
        <div class="content-section">
            <h2>Our Expertise</h2>
            <p>$($page.intro1)</p>
            <p>$($page.intro2)</p>
        </div>

        <div class="highlight-section">
            <h2>What We Do</h2>
            <ul>
$servicesHtml
            </ul>
        </div>

        <div class="content-section">
            <h2>Specialized Services</h2>
            <div class="expertise-grid">
$cardsHtml
            </div>
        </div>

        <div class="content-section">
            <h2>Why Choose KBJ & CO</h2>
            <p>$($page.why)</p>
        </div>
    </div>

    <div class="cta-section">
        <h2>Need Legal Assistance?</h2>
        <p>Let our experts provide the strategic counsel your business deserves</p>
        <a href="/#contact" class="cta-button">Get in Touch</a>
    </div>

    <div style="text-align: center;">
        <a href="/" class="back-button">← Back to Home</a>
    </div>
</body>
</html>
"@

    Set-Content -Path $page.file -Value $htmlContent -Encoding UTF8
    Write-Host "✓ Created $($page.file)" -ForegroundColor Green
}

Write-Host "`n✅ All 20 practice area pages updated with unique marketing content!" -ForegroundColor Cyan
