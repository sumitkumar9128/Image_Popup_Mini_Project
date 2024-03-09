// document
//   .querySelector("#centre")
//   .addEventListener("mousemove", function (dets) {
//     console.log(dets.clientX, dets.clientY);
//   });

// const btn = document.querySelector("#throttle");

const throttleFunction = (func, delay) => {
  let prev = 0;
  return (...args) => {
    let now = new Date().getTime();
    if (now - prev > delay) {
      prev = now;
      return func(...args);
    }
  };
};
document.querySelector("#centre").addEventListener(
  "mousemove",
  throttleFunction((dets) => {
    //your delay code
    var div = document.createElement("div");
    div.classList.add('imagediv');
    div.style.left =  dets.clientX+'px';
    div.style.top  = dets.clientY+'px';

    var img = document.createElement("img");
    img.setAttribute("src", "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1931674c-b4c7-4333-b2b7-7b4c4399ec48/dgrew6i-1773c953-aea3-40f7-8060-f0862282e977.jpg/v1/fit/w_375,h_548,q_70,strp/vip_adopt_by_lovestoryai_dgrew6i-375w.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzE5MzE2NzRjLWI0YzctNDMzMy1iMmI3LTdiNGM0Mzk5ZWM0OFwvZGdyZXc2aS0xNzczYzk1My1hZWEzLTQwZjctODA2MC1mMDg2MjI4MmU5NzcuanBnIiwiaGVpZ2h0IjoiPD0xMTcwIiwid2lkdGgiOiI8PTgwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS53YXRlcm1hcmsiXSwid21rIjp7InBhdGgiOiJcL3dtXC8xOTMxNjc0Yy1iNGM3LTQzMzMtYjJiNy03YjRjNDM5OWVjNDhcL2xvdmVzdG9yeWFpLTQucG5nIiwib3BhY2l0eSI6OTUsInByb3BvcnRpb25zIjowLjQ1LCJncmF2aXR5IjoiY2VudGVyIn19.vijNDOdZ7L4P2zi4r1mhRflaZcit_tEbE8FuWwpVQSQ")
    div.appendChild(img);

    document.body.appendChild(div);

    gsap.to(img,{
        y: "0",
        ease: Power1,
        duration: .6
    });
    gsap.to(img,{
        y: "100%",
        delay: .6,
        ease: Power2
    })
    setTimeout(function(){
        div.remove();
    },  2000)
  }, 400)
);
