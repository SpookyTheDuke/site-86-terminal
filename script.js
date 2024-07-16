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

        showDcbPrompt();
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
                if (dcbInput.value === 'Print Out DCB') {
                    window.location.href = 'https://docs.google.com/presentation/d/1Z-2Nt39fGeay_m8TPZGvFZCyNbYZsnVhZQiPesekveQ/edit?usp=sharing';
                } else if (dcbInput.value === 'Open DCB') {
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
    
        const welcomeLine = document.createElement('div');
        welcomeLine.textContent = "Welcome Authorized Personnel";
        welcomeLine.style.color = 'red';
        welcomeLine.style.fontWeight = 'bold';
        terminal.appendChild(welcomeLine);
    
        const options = [
            'Personal Information',
            'Personal Opinions',
            'Miscellaneous'
        ];
    
        options.forEach(option => {
            const optionLine = document.createElement('div');
            optionLine.textContent = option;
            terminal.appendChild(optionLine);
        });
    
        setTimeout(showPersonalInfo, 1000);
    }
    
    function showPersonalInfo() {
        const info = {
            'Code Name': 'Zeus',
            'Full Name': 'Berry White',
            'DOB': '05/19/1995',
            'Department': "Alpha-1 'Red Right Hand', Former Mu-4 'Debuggers', Former NTF NCO and IST Guard",
            'Rank': 'Operative',
            'Character Description': "Operative 'Zeus' is a well-organized and mannered individual, originally from Site-██ as Security Personnel, came from a regular background and history whilst working at the Foundation until one day, a Nine-Tailed Fox recruitment came to his Site and afterwards is history with several years of experience following, missions and stationary tasks alike. Operative 'Chip' is a Caucasian Male, originating from North America in his hometown of ██████, with a fairly unique blood-type but average looks, with Black Hair and Blue Eyes.",
            'Character Impactful Events': [
                "On 02/01/2014, NTF SGT Berry White, 'Zeus', was sent out on a Mission in Southern Vietnam on a Mission to locate and capture SCP-████ on orders to either take it in Dead or Alive, but the mission went awry as soon as they landed near the hot-zone. Multiple Personnel from the Foundation and a GOI laid in-front of them as the Forest was lit ablaze, a terrifying but familiar sight with the job but what was unique was the SCP that they were sent to collect. It was crying, a sight that was unusual and unfamiliar to the Sergeant and caught him off-guard, affecting his later choices, but currently they start securing the area around them and started to apprehend the SCP but out of the Forest came more hostiles from the GOI trying to make a final push to get rid of the reinforcements but they were fended off. The SCP took notice and started becoming more active and aggressive, it charged the Mobile Task Force Operatives and tearing them apart one by one, but not in a active of malice but in revenge for those that were killed by the Operatives. 'Chip' Hesitated, thinking of the rational choice to make and fear that killing said SCP wouldn't be right, but he had too for the remaining survivors and put the SCP down, collecting the body and heading back to Area-████"
            ]
        };
    
        for (const key in info) {
            const infoLine = document.createElement('div');
            if (Array.isArray(info[key])) {
                infoLine.textContent = `${key}:`;
                terminal.appendChild(infoLine);
                info[key].forEach(item => {
                    const itemLine = document.createElement('div');
                    itemLine.textContent = item;
                    terminal.appendChild(itemLine);
                });
            } else {
                infoLine.textContent = `${key}: ${info[key]}`;
                terminal.appendChild(infoLine);
            }
        }
    }
    
    // Start the boot sequence
    printNextLine();
});
