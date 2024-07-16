document.addEventListener('DOMContentLoaded', (event) => {
    const terminal = document.getElementById('terminal');
    const bootSequence = [
        "**Terminal Boot Sequence Initiated**",
        "",
        "**Initialising Site_86_Operating System...**",
        "████████████████████████████████████████████████████████████████████████████████████████████",
        "",
        "**Loading System Files...**",
        "████████████████████████████████████████████████████████████████████████████████████████████",
        "",
        "**Foundation_RAISA System Boot Complete**",
        "",
        "**Please Log In**"
    ];

    const codes = [
        "Loading kernel modules...",
        "Initializing hardware...",
        "Configuring network interfaces...",
        "Starting system logger...",
        "Mounting filesystems...",
        "Starting RAID monitoring services...",
        "Initializing random number generator...",
        "Checking battery status...",
        "Starting system message bus...",
        "Loading security policies...",
        "Loading user settings...",
        "Starting web services...",
        "Updating database connections...",
        "Initializing AI modules...",
        "Performing security checks...",
        "Starting virtual machine monitor...",
        "Initializing encryption services...",
        "Launching main interface..."
    ];

    let currentIndex = 0;

    function printNextLine() {
        if (currentIndex < bootSequence.length) {
            const line = document.createElement('div');
            line.textContent = bootSequence[currentIndex++];
            terminal.appendChild(line);
            setTimeout(printNextLine, 500); // Adjust delay for each line
        } else {
            showLoginPrompt();
        }
    }

    function showLoginPrompt() {
        const usernameLine = document.createElement('div');
        usernameLine.textContent = "Username: ";
        const usernameInput = document.createElement('input');
        usernameInput.setAttribute('type', 'text');
        usernameInput.setAttribute('id', 'username');
        usernameLine.appendChild(usernameInput);
        terminal.appendChild(usernameLine);

        usernameInput.focus();

        usernameInput.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                showPasswordPrompt();
            }
        });
    }

    function showPasswordPrompt() {
        const passwordLine = document.createElement('div');
        passwordLine.textContent = "Password: ";
        const passwordInput = document.createElement('input');
        passwordInput.setAttribute('type', 'password');
        passwordInput.setAttribute('id', 'password');
        passwordLine.appendChild(passwordInput);
        terminal.appendChild(passwordLine);

        passwordInput.focus();

        passwordInput.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                validateCredentials();
            }
        });
    }

    function validateCredentials() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === 'olympusrrhzeus@RAISA.gov' && password === 'fulmen deum') {
            accessGranted();
        } else {
            const errorLine = document.createElement('div');
            errorLine.textContent = "**Access Denied**";
            terminal.appendChild(errorLine);
        }
    }

    function accessGranted() {
        const grantedLine = document.createElement('div');
        grantedLine.textContent = "**Access Granted**";
        terminal.appendChild(grantedLine);

        showBootSequence();
    }

    function showBootSequence() {
        currentIndex = 0;
        terminal.innerHTML = ''; // Clear terminal
        playBootSound(); // Play boot sound
        printNextLine();
    }

    function playBootSound() {
        const audio = new Audio('assets/bootup_sound.mp3');
        audio.play();
    }

    function showDcbPrompt() {
        const dcbLine = document.createElement('div');
        dcbLine.textContent = "Type 'Print Out DCB' or 'Open DCB' to continue:";
        terminal.appendChild(dcbLine);

        const dcbInput = document.createElement('input');
        dcbInput.setAttribute('type', 'text');
        dcbInput.setAttribute('id', 'dcb');
        terminal.appendChild(dcbInput);

        dcbInput.focus();

        dcbInput.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                const command = dcbInput.value.toLowerCase().trim();
                if (command === 'print out dcb') {
                    window.location.href = 'https://docs.google.com/presentation/d/1Z-2Nt39fGeay_m8TPZGvFZCyNbYZsnVhZQiPesekveQ/edit?usp=sharing';
                } else if (command === 'open dcb') {
                    showDcbInfo();
                } else {
                    const errorLine = document.createElement('div');
                    errorLine.textContent = "**Invalid Command**";
                    terminal.appendChild(errorLine);
                }
            }
        });
    }

    function showDcbInfo() {
        terminal.innerHTML = '';

        const personalInfo = {
            'Code Name': 'Zeus',
            'Full Name': 'Berry White',
            'DOB': '05/19/1995',
            'Department': "Alpha-1 'Red Right Hand', Former Mu-4 'Debuggers', Former NTF NCO and IST Guard",
            'Rank': 'Operative',
            'Character Description': "Operative 'Zeus' is a well-organized and mannered individual, originally from Site-██ as Security Personnel, came from a regular background and history whilst working at the Foundation until one day, a Nine-Tailed Fox recruitment came to his Site and afterwards is history with several years of experience following, missions and stationary tasks alike. Operative 'Chip' is a Caucasian Male, originating from North America in his hometown of ██████, with a fairly unique blood-type but average looks, with Black Hair and Blue Eyes."
        };

        const personalOpinions = {
            'HATES': [
                "Insurgents: \"Working on the field to keep SCPs contained, they are the opposite to my job and a issue in my life on a near daily basis.\""
            ],
            'DISLIKES': [
                "SCP-682: \"I believe, if you talked to any Nine-Tailed Fox Member, they would agree with my opinion that this Thing shouldn't be alive but I also feel pity for it.\"",
                "SCP-457: \"I'd say one of, if not even the worst, anomaly to ever be faced off against especially when you are layered in heavy amounts of armor and equipment, getting set ablazed or baked in my Uniform isn't what I like to be doing on a near regular basis.\"",
                "Grape Jam: \"I don't know why, but I like grapes by themselves but when it is made into a jam, I would say it was one of the worst inventions to ever be considered.\""
            ],
            'NEUTRAL': [
                "Research Department: \"Honestly, from what I've seen, the Research Department is quite... Narrow Minded in some regards or rather ignorant to produce results on a timely scale but I also admire there creativity in making a new solution to a already simple one.\"",
                "Site Command: \"I couldn't tell you how I felt about them as a group but more individually as some of the Members on Site Command are usually level-headed or precise in their duties but sometimes I feel like they lack the ability to collaborate with each other for the actual success of this Site.\"",
                "Village Idiots: \"Quite hard-workers, from what I've seen anyway, besides the occasional issue regarding them falling in love with CI and being Turncoats, but other than that they are a pretty exceptional bunch of people and cannon fodder to the first wave of CI trying to raid the facility.\""
            ],
            'LIKES': [
                "Video Games: \"Hey, whenever we aren't busy with something, what else to do but play a good ol Video Game?\"",
                "Electronics: \"Honestly, I don't know what led me into this career but I suppose where I am now is because of my own habits and obsession with the growing and always evolving form of technology and electronics.\"",
                "Investigations: \"Investigating the unknown, or even just having a clue to a bigger picture and expanding upon it gives me excitement with my job. Especially uncovering plots or hidden secrets regarding to personnel or enemies I've come to known, a eccentric hobby of mine.\"",
                "Nine Tailed Fox: \"My Personal Favorite Branch and also where I've originated from entirely, a Home unlike no other to me in the Foundation, even now I still regret leaving my position to join a entirely different Task Force but my skills should be placed else where to flutter than in Heavy Containment.\""
            ]
        };

        const miscellaneous = {
            'Character Impactful Events': [
                "On 02/01/2014, NTF SGT Berry White, 'Zeus', was sent out on a Mission in Southern Vietnam on a Mission to locate and capture SCP-████ on orders to either take it in Dead or Alive, but the mission went awry as soon as they landed near the hot-zone. Multiple Personnel from the Foundation and a GOI laid in-front of them as the Forest was lit ablaze, a terrifying but familiar sight with the job but what was unique was the SCP that they were sent to collect. It was crying, a sight that was unusual and unfamiliar to the Sergeant and caught him off-guard, affecting his later choices, but currently they start securing the area around them and started to apprehend the SCP but out of the Forest came more hostiles from the GOI trying to make a final push to get rid of the reinforcements but they were fended off. The SCP took notice and started becoming more active and aggressive, it charged the Mobile Task Force Operatives and tearing them apart one by one, but not in a active of malice but in revenge for those that were killed by the Operatives. 'Chip' Hesitated, thinking of the rational choice to make and fear that killing said SCP wouldn't be right, but he had too for the remaining survivors and put the SCP down, collecting the body and heading back to Area-████"
            ],
            'Personal Opinions': [
                "HATES:",
                "Insurgents: \"Working on the field to keep SCPs contained, they are the opposite to my job and a issue in my life on a near daily basis.\"",
                "",
                "DISLIKES:",
                "SCP-682: \"I believe, if you talked to any Nine-Tailed Fox Member, they would agree with my opinion that this Thing shouldn't be alive but I also feel pity for it.\"",
                "SCP-457: \"I'd say one of, if not even the worst, anomaly to ever be faced off against especially when you are layered in heavy amounts of armor and equipment, getting set ablazed or baked in my Uniform isn't what I like to be doing on a near regular basis.\"",
                "Grape Jam: \"I don't know why, but I like grapes by themselves but when it is made into a jam, I would say it was one of the worst inventions to ever be considered.\"",
                "",
                "NEUTRAL:",
                "Research Department: \"Honestly, from what I've seen, the Research Department is quite... Narrow Minded in some regards or rather ignorant to produce results on a timely scale but I also admire there creativity in making a new solution to a already simple one.\"",
                "Site Command: \"I couldn't tell you how I felt about them as a group but more individually as some of the Members on Site Command are usually level-headed or precise in their duties but sometimes I feel like they lack the ability to collaborate with each other for the actual success of this Site.\"",
                "Village Idiots: \"Quite hard-workers, from what I've seen anyway, besides the occasional issue regarding them falling in love with CI and being Turncoats, but other than that they are a pretty exceptional bunch of people and cannon fodder to the first wave of CI trying to raid the facility.\"",
                "",
                "LIKES:",
                "Video Games: \"Hey, whenever we aren't busy with something, what else to do but play a good ol Video Game?\"",
                "Electronics: \"Honestly, I don't know what led me into this career but I suppose where I am now is because of my own habits and obsession with the growing and always evolving form of technology and electronics.\"",
                "Investigations: \"Investigating the unknown, or even just having a clue to a bigger picture and expanding upon it gives me excitement with my job. Especially uncovering plots or hidden secrets regarding to personnel or enemies I've come to known, a eccentric hobby of mine.\"",
                "Nine Tailed Fox: \"My Personal Favorite Branch and also where I've originated from entirely, a Home unlike no other to me in the Foundation, even now I still regret leaving my position to join a entirely different Task Force but my skills should be placed else where to flutter than in Heavy Containment.\""
            ],
            'Thoughts on People': [
                "HATES:",
                "",
                "DISLIKES:",
                "ASC Billy Goat: \"I do not understand or perceive a Goat that can speak being capable of ordering people to fight, whilst itself is a Goat.\"",
                "ASD Olivia Jones: \"Quite a Oddball of a Site Command Member, we don't see eye to eye on most arguments and I think she is quite ignorant to anything besides her own point of view sometimes.\"",
                "Psycho: \"Weird and a Psychotic Master Manipulator but I'll give him the props of being one hell of a tactician and a pain our asses especially as a really Vessel for that Overseer.\"",
                "",
                "NEUTRAL:",
                "ASC Felix Winters: \"Funny Guy, though he is a little bit too much of a Serious Sam even when we are on Break.\"",
                "'Pollux': \"To note, I like Surge, but I also can't get over the fact that sometimes he is unintelligable to talk to especially with his voice modulator, it gives me a headache hearing his accent mixed into his helmet's voice scrambler.\"",
                "'Waymaker': \"He's a Alright Guy, not much to say on him besides he does his job well and efficiently.\"",
                "",
                "LIKES:",
                "Site Director Benoit Couture: \"A Great and Former Director, though a bit unfortunate that he has some issues but we are human after all.\"",
                "'Thanatos': \"A Respectable Captain, even though he isn't around to see to much, his impact and performance makes up for it.\""
            ],
            'Character Unique Items': [
                "A NTF Helmet, with the inscriptions, 110%.",
                "Weird Alien-like Object from the CI Commanders Office",
                "A Tape with multiple recordings on it from the CI Commanders Office"
            ],
            'Personal Communications': [
                "'Breaker', 'Gigabyte', 'Surge', 'LED', 'Wheeler', Dr. 'Mainler', E6 SL 'Raven'"
            ]
        };

        displayCategory('Personal Information', personalInfo);

        setTimeout(() => {
            displayCategory('Personal Opinions', personalOpinions);
        }, 500); // Delay for realism

        setTimeout(() => {
            displayCategory('Miscellaneous', miscellaneous);
        }, 1000); // Delay for realism
    }

    function displayCategory(categoryName, categoryData) {
        const categoryHeader = document.createElement('div');
        categoryHeader.textContent = categoryName;
        categoryHeader.style.color = 'red';
        categoryHeader.style.fontWeight = 'bold';
        terminal.appendChild(categoryHeader);

        for (const key in categoryData) {
            if (Array.isArray(categoryData[key])) {
                const subcategoryHeader = document.createElement('div');
                subcategoryHeader.textContent = `${key}:`;
                terminal.appendChild(subcategoryHeader);

                categoryData[key].forEach(item => {
                    const itemLine = document.createElement('div');
                    itemLine.textContent = item;
                    terminal.appendChild(itemLine);
                });
            } else if (typeof categoryData[key] === 'object') {
                // Handle nested objects if any
            } else {
                const itemLine = document.createElement('div');
                itemLine.textContent = `${key}: ${categoryData[key]}`;
                terminal.appendChild(itemLine);
            }
        }
    }

    // Start boot sequence when the page loads
    showBootSequence();

    // Handle 'Open DCB' command
    showDcbPrompt();

    // Boot sequence commands
    function showBootSequence() {
        bootSequence.forEach((line, index) => {
            setTimeout(() => {
                printLine(line);
            }, index * 1000); // Adjust delay for each line
        });
    }

    function printLine(line) {
        const lineElement = document.createElement('div');
        lineElement.textContent = line;
        terminal.appendChild(lineElement);
    }

    // Audio function
    function playBootSound() {
        const audio = new Audio('assets/bootup_sound.mp3');
        audio.play();
    }
});
