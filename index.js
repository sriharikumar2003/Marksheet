$(document).ready(function(){
    $(".enter").click(() => {
        let name = $("#stud").val();
        let regno = $("#regi").val();
        $("#stuname").html(`<h4>Student Name</h4><h4>${name}</h4>`);
        $("#regnum").html(`<h4>Register No</h4><h4>${regno}</h4>`);
        let phyt = $(".phyt").val(); 
        let phyp = $(".phyp").val(); 
        $(".physics").append(`<th>${phyt}</th><th>${phyp}</th><th>${parseInt(phyt) + parseInt(phyp)}</th>`);
        let chet = $(".chet").val();  
        let chep = $(".chep").val(); 
        $(".Chemistry").append(`<th>${chet}</th><th>${chep}</th><th>${parseInt(chet) + parseInt(chep)}</th>`);
        let math = $(".math").val(); 
        $(".maths").append(`<th>${math}</th><th>NIL</th><th>${math}</th>`);
        let pom = $(".pom").val(); 
        $(".manage").append(`<th>${pom}</th><th>NIL</th><th>${pom}</th>`);
        let total = parseInt(phyt)+parseInt(phyp)+parseInt(chet) + parseInt(chep)+parseInt(math) + parseInt(pom);
        $("#total").append(`
            <th colspan="6">Grand Total: ${total}</th>
            `);

        if(total > 200){
            $("#end").append(`
                <th>PASS</th>
                `);
        }
        else{
            $("#end").append(`
                <th>FAIL</th>
                `); 
        }
        let percent = total/4;
        $("#end").append(`
            <th>${percent}%</th>
            `);
        if(percent >= 90){
            $("#end").append(`
                <th>O</th>
                `); 
        }
        else if(percent >= 80 && percent < 90){
            $("#end").append(`
                <th>A</th>
                `); 
        }
        else if(percent >= 70 && percent < 80){
            $("#end").append(`
                <th>A</th>
                `); 
        }
        else if(percent >= 60 && percent < 70){
            $("#end").append(`
                <th>B</th>
                `); 
        }
        else if(percent >= 50 && percent < 60){
            $("#end").append(`
                <th>C</th>
                `); 
        }
        else{
            $("#end").append(`
                <th>D</th>
                `); 
            }
            $(".enter").prop("disabled", true);
    });
});

function reply(){
    alert("Marksheet Saved");
}
