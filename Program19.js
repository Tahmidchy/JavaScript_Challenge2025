/*
TODO: Problem-19: If a book has fewer than 100 pages, it is called a "small book"; if the number of pages is between 100 and 500, it is called a "mid-size book", and if it has more than 500, it is called a "heart attack size book".
*/

//Solution:

const Book_Page = 250;

if(Book_Page <= 100){
    console.log("This is a small book");
} else if(Book_Page <= 500){
    console.log("This is a mid-size book");
} else if( Book_Page > 500 ){
    console.log("This is a heart attack size book");
} else{
    console.log("Invalid book size");
}