// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

// Create a function which translates a given DNA string into RNA.

// For example:

// "GCAT"  =>  "GCAU"

//my solution
function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence
  let arr = dna.slice("T");
  let rna = "";
  for (i of arr) {
    if (i == "T") {
      rna += "U";
    } else {
      rna += i;
    }
  }
  return rna;
}

// best solution
function DNAtoRNA(dna) {
  return dna.replace(/T/g, "U");
}
