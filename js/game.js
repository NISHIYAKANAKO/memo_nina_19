$(function(){
    $('#btn').click(function(){
        //#screen , #your_kickを表示させる
        $('#screen').show();
        $('#your_kick').show();
        //ボタンを非表示にする 
        $(this).hide();
    }); 

});

   // #ball_leftが押されたら乱数を生成
   $("#ball_left").on("click", function () {
    const num = Math.random();
    const r = Math.ceil(num * 3);
    //１だったら左、２だったら真ん中、３だったら右
    if (r == 1) {
      $("#position").html("モルちゃんがボールをキャッチ！！！");
      $("#result").html("<img src='img/pk-l2.png'>");
    }
    if (r == 2) {
      $("#position").html("モルちゃんは動けませんでした。");
      $("#result").html("<img src='img/pkmoru.png'>");
    }
    if (r == 3) {
      $("#position").html("モルちゃんは右に行っちゃったよ！");
      $("#result").html("<img src='img/pkmoru.png'>");
    }
  });

  // #ball_centerが押されたら乱数を生成
  $("#ball_center").on("click", function () {
    const num = Math.random();
    const r = Math.ceil(num * 3);
    //１だったら左、２だったら真ん中、３だったら右
    if (r == 1) {
      $("#position").html("モルちゃんは左に行きました！");
      $("#result").html("<img src='img/pkmoru.png'>");
    }
    if (r == 2) {
      $("#position").html("モルちゃんがボールをキャッチ！！！");
      $("#result").html("<img src='img/pk-c2.png'>");
    }
    if (r == 3) {
      $("#position").html("モルちゃんは右に行っちゃったよ！");
      $("#result").html("<img src='img/pkmoru.png'>");
    }
  });

  // #ball_rightが押されたら乱数を生成
  $("#ball_right").on("click", function () {
    const num = Math.random();
    const r = Math.ceil(num * 3);
    //１だったら左、２だったら真ん中、３だったら右
    if (r == 1) {
      $("#position").html("モルちゃんは左に行きました！");
      $("#result").html("<img src='img/pkmoru.png'>");
    }
    if (r == 2) {
      $("#position").html("モルちゃんは動けませんでした。");
      $("#result").html("<img src='img/pkmoru.png'>");
    }
    if (r == 3) {
      $("#position").html("モルちゃんがボールをキャッチ！！！");
      $("#result").html("<img src='img/pk-r2.jpg'>");
    }
  });