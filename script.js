document.addEventListener("DOMContentLoaded", () => {
    const members = [
        { name: "FrysRullzy", role: "Owner" },
        { name: "BIBINGGAMING", role: "Leader Builder" },
        { name: "Lumar2702", role: "Builder" },
        { name: "ZerxyzMC", role: " Leader Admin" },
        { name: "Raikaru", role: "Admin" },
        { name: "Luxyz", role: "Leader Police" }
    ];

    const links = [
        { name: "Group Link", url: "https://chat.whatsapp.com/DbX5izkmF5k1Iy7S4h4LQI" },
        { name: "Voter Link", url: "https://minecraftpocket-servers.com/server/127683/vote/" },
        { name: "Download Minecraft", url: "https://bfdmcommunity.netlify.app/" }
    ];

    const membersList = document.getElementById("members-list");
    const linksDiv = document.getElementById("links");

    members.forEach(member => {
        const li = document.createElement("li");
        li.textContent = `${member.name} - ${member.role}`;
        membersList.appendChild(li);
    });

    links.forEach(link => {
        const a = document.createElement("a");
        a.textContent = link.name;
        a.href = link.url;
        a.className = "link-button";
        a.target = "_blank"; // Open link in a new tab
        linksDiv.appendChild(a);
    });
});