module.exports.index=function(req,res){
    res.render('index', { title: 'Fitnesshub' });
   };
   module.exports.signin=function(req,res){
    res.render('signin', { title: 'Fitnesshub' });
   };
   module.exports.review=function(req,res){
    res.render('review', { title: 'Fitnesshub' });
   };