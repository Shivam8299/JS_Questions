function assignBeds() {
    const names = ["Abdul", "Thapa", "Vishal Gupta (Suhani)", "Amit Rathore", "Vishal", "Gopale", "Nikhil", "Vishal Deshmukh", "Ankit(IT)", "Sree Krishna", "Sandeep", "Sohan", "Amit(Gandhi)", "Rahul Gangwar", "Akash Gupta", "Suraj", "Krishna (Disco)", "Anubhav", "Tika Ram", "Ravinder", "Rohit Verma", "Shivam Mishra", "Harsh", "Yogesh", "Atulya Ankit"];
    let beds = Array.from({ length: 25 }, (_, i) => i + 1);
    
    // Shuffle both arrays to randomize assignment
    names.sort(() => Math.random() - 0.5);
    beds.sort(() => Math.random() - 0.5);
    
    let assignments = beds.map((bed, index) => ({
        Name: names[index],
        bed
    }));
    
    return assignments;
}

console.log(assignBeds());
