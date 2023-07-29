// get data to button tags 

const buttonClickHere = document.querySelector(".todos .create-new-todo button");

// get data for input tag
const inputClickHere = document.querySelector(".todos .create-new-todo input");

// push data for ul tag for innerHTML method using here 
const todoLists = document.querySelector(".todos ul");



// showData function creation for show and push database 

const showData = () => {

    let content = '';
    
    toDosData.reverse().map((item, index) => {
        content += `<li><p><i class="fa-solid fa-check"></i> ${item}</p> <button onclick="deleteData('${item}')"><i class="fa-solid fa-trash"></i></button></li>`;
    });

    // push data for ul tag for innerHTML
    todoLists.innerHTML = content;

}

   
    buttonClickHere.onclick = () => {
       const data = buttonClickHere.previousElementSibling.value;
       
       if(data){
        toDosData.push(data);

        //empty input filed data 
       buttonClickHere.previousElementSibling.value = '';
       }else{
        alert("Plz Filed Must Be Empty ?")
       }

       showData();
    }


    // create a function for delete single item for database 

    function deleteData(item){
        
        const updateData = toDosData.filter((data) => data != item );

        toDosData = updateData;

        showData();
    }


showData();

