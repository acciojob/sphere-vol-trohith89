document.getElementById("submit").addEventListener("click", volume_sphere(){
    const pi = 3.14;
    let r = document.getElementById("radius").value;
    let ans = (4/3)*pi*r*r*r;
    document.getElementById("volume").value = ans;
})

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
