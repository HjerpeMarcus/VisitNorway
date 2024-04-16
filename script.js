const likeRef = document.querySelectorAll('.like');
const dropRef = document.querySelectorAll('.dropDown');
const timeRef = document.querySelector('#time');
const time2Ref = document.querySelector('#time2');
    //==================LIKE-TOGGLE=================//
    likeRef.forEach(like => {
        like.addEventListener('click', function handleClick(event) {
        like.classList.toggle("checked");
        });
      });
    //====================DROPDOWN==================//
      dropRef.forEach(dropDown => {
        dropDown.addEventListener('click', function handleClick(event) {
        dropDown.classList.toggle("invisible");
        });
      });
function getTime(x){
    fetch("https://timezone.abstractapi.com/v1/current_time/?api_key=509fa4d8bd644e12aec0951a74dd5c31&location=Oslo, Norway")
        .then(response => response.json())
        .then(data => {
            console.log(data);
        let datetime = data.datetime;
        timeRef.innerHTML = `<span class="material-icons clock">
        schedule
        </span> ${datetime}`;
        time2Ref.innerHTML = `<span class="material-icons clock">
        schedule
        </span> ${datetime}`;
    })
    };
    setInterval(getTime, 1100);