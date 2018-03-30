var img = $('img');
var holder = $('#holder');
var info = $('#info');
var imgInfo =  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores ducimus explicabo dolorem iste rerum voluptatem, itaque error placeat, perspiciatis, neque voluptas possimus ab sed autem dolorum quisquam totam quam pariatur.';
var i=0;            

img.on('click', function(){
    i++;
    info.html('');
    var self = $(this);
    var copy = self.clone();
        copy.css({
            position:'absolute',
            width: self.width(),
            height: self.height(),
            top:self.offset().top,
            left:self.offset().left

        });
        copy.animate({
            top: holder.offset().top,
            left: holder.offset().left,
            width: holder.width(),
            height: holder.height()
        },1000,function(){
            if(i==2)
            holder.find('img').eq(0).remove();
            i=1;
            info.append(imgInfo);
        });
    holder.append(copy);
});