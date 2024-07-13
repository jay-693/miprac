function hom(callback) {
    document.getElementById("home").style.display = "none";
    document.getElementById("homepage").style.display = "block";
    document.getElementById("industries").style.display = "none";
    document.getElementById("insights").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("careers").style.display = "none";
    document.getElementById("contact").style.display = "none";
    if (callback && typeof(callback) === "function") {
        callback();
    }
}

function ind(callback) {
    document.getElementById("home").style.display = "none";
    document.getElementById("homepage").style.display = "none";
    document.getElementById("industries").style.display = "block";
    document.getElementById("insights").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("careers").style.display = "none";
    document.getElementById("contact").style.display = "none";
    if (callback && typeof(callback) === "function") {
        callback();
    }
}
function ins(callback) {
    document.getElementById("home").style.display = "none";
    document.getElementById("homepage").style.display = "none";
    document.getElementById("industries").style.display = "none";
    document.getElementById("insights").style.display = "block";
    document.getElementById("about").style.display = "none";
    document.getElementById("careers").style.display = "none";
    document.getElementById("contact").style.display = "none";
    if (callback && typeof(callback) === "function") {
        callback();
    }
}
function abo(callback) {
    document.getElementById("home").style.display = "none";
    document.getElementById("homepage").style.display = "none";
    document.getElementById("industries").style.display = "none";
    document.getElementById("insights").style.display = "none";
    document.getElementById("about").style.display = "block";
    document.getElementById("careers").style.display = "none";
    document.getElementById("contact").style.display = "none";
    if (callback && typeof(callback) === "function") {
        callback();
    }
}
function car(callback) {
    document.getElementById("home").style.display = "none";
    document.getElementById("homepage").style.display = "none";
    document.getElementById("industries").style.display = "none";
    document.getElementById("insights").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("careers").style.display = "block";
    document.getElementById("contact").style.display = "none";
    if (callback && typeof(callback) === "function") {
        callback();
    }
}
function con(callback) {
    document.getElementById("home").style.display = "none";
    document.getElementById("homepage").style.display = "none";
    document.getElementById("industries").style.display = "none";
    document.getElementById("insights").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("careers").style.display = "none";
    document.getElementById("contact").style.display = "block";
    if (callback && typeof(callback) === "function") {
        callback();
    }
}
function srh() {
    document.getElementById("home").style.display = "none";
    document.getElementById("homepage").style.display = "none";
    document.getElementById("industries").style.display = "block";
    document.getElementById("insights").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("careers").style.display = "none";
    document.getElementById("contact").style.display = "none";
    document.getElementById("footerContainer").style.display = "none";
    document.getElementById("footerBottom").style.display = "none";
}
        async function searchFunction(query) {
            return new Promise(resolve => {
                if (!query) {
                    reject();
                    return;
                }
                setTimeout(() => {
                    resolve("results for: " + query);
                }, 1000); 
            });
        }
        document.getElementById("btn").addEventListener("click", async function() {
            const query = document.getElementById("srch").value;
            document.getElementById("searchResults").innerText = "Searching...";

            try {
                const results = await searchFunction(query);
                document.getElementById("searchResults").innerText = results;
            } catch (error) {
                console.error("An error occurred during search:", error);
                document.getElementById("searchResults").innerText = "An error occurred during search.";
                document.getElementById("searchResults").value=document.getElementById("industries").value;
            }
        });

        
        
        
        
