import express from 'express';

var app = express ();

app.listem(3001, () => {
    console.log('Server is ok...');
});

app.get('/exrer2/:text', (req,res) => {
    let text = req.params.text;

    res.send('The lenght of the text is ' + text.length);

})

app.get('/exer3/:num1/:num2', (req.res) => {
    let n1 = Number(req.params.num1);
    let n2 = Number(req.params.num2);

    let sum = n1 + n2;

    res.send(`Sum of number ${n1} and ${n2} equals ${sum}`);
});

