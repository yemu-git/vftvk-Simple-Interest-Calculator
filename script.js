function validate()
{
    var principal = document.getElementById("principal").value;
    //validation for principal amount field
    if(principal == "")
    {
        document.getElementById("principal").focus();
        alert("Amount filed is empty");
        return false;
    }
    else if(principal <= 0){
        document.getElementById("principal").focus();
        alert("Enter a positive number");
        return false;
    }
    return true;
}

function compute()
{
    if(validate()){
        var principal = document.getElementById("principal").value;
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        var interest = principal * years * rate /100;
        var year = new Date().getFullYear()+parseInt(years);

        //created 'highlight' css element to use for the span elements here (number fields to be colored yellow)
        //principal amount result - with background color yellow
        principal_highlight = document.createElement("span");
        principal_highlight.setAttribute('class', 'highlight');
        principal_highlight.innerText = principal;
        
        //rate result - with background color yellow
        rate_highlight = document.createElement("span");
        rate_highlight.setAttribute('class', 'highlight');
        rate_highlight.innerText = rate;

        //interest result - with background color yellow
        interest_highlight = document.createElement("span");
        interest_highlight.setAttribute('class', 'highlight');
        interest_highlight.innerText = interest;

        //year result - with background color yellow
        year_highlight = document.createElement("span");
        year_highlight.setAttribute('class', 'highlight');
        year_highlight.innerText = year;

        //update the 'result' element with the new summaries - build the inner html for the span element with id 'result'
        var resultId = document.getElementById("result");
        resultId.append("If you deposit ");
        resultId.appendChild(principal_highlight);
        resultId.append(",");
        resultId.appendChild(document.createElement('br'));
        resultId.append( "at an interest rate of ");
        resultId.appendChild(rate_highlight);
        resultId.append("%.");
        resultId.appendChild(document.createElement('br'));
        resultId.append("You will reveice an amount of ");
        resultId.appendChild(interest_highlight);
        resultId.append(",");
        resultId.appendChild(document.createElement('br'));
        resultId.append("in the year ");
        resultId.appendChild(year_highlight);
    }
    else{
        //clear any summary result (from prevous successful compute)
        document.getElementById("result").innerHTML = "";
    }
}
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}
        