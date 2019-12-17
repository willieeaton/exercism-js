export function translate(rna) {
  if (typeof(rna) != "string") {
    return [];
  }
  rna = rna.toUpperCase();
  var codonNumber = rna.length / 3;
  var proteins = [];
  for(var i = 0; i < codonNumber; i++)
  {
    var thisProtein = getProtein(rna.substring(i * 3, i * 3 + 3));
    if(thisProtein == 'STOP')
      break;
    else
      proteins.push(thisProtein);
  }
  return proteins;
}

function getProtein(codon) {
  for (var element of proteinTable)
  {
    if (element.key == codon)
    return element.result;
  }
  throw("Invalid codon");
}

var proteinTable = [
  { key: 'UUU', result: 'Phenylalanine'  },
  { key: 'UUC', result: 'Phenylalanine'  },
  { key: 'UUA', result: 'Leucine'  },
  { key: 'UUG', result: 'Leucine'  },
  { key: 'CUU', result: 'Leucine'  },
  { key: 'CUC', result: 'Leucine'  },
  { key: 'CUA', result: 'Leucine'  },
  { key: 'CUG', result: 'Leucine'  },
  { key: 'AUU', result: 'Isoleucine'  },
  { key: 'AUC', result: 'Isoleucine'  },
  { key: 'AUA', result: 'Isoleucine'  },
  { key: 'AUG', result: 'Methionine'  },
  { key: 'GUU', result: 'Valine'  },
  { key: 'GUC', result: 'Valine'  },
  { key: 'GUA', result: 'Valine'  },
  { key: 'GUG', result: 'Valine'  },
  { key: 'UCU', result: 'Serine'  },
  { key: 'UCC', result: 'Serine'  },
  { key: 'UCA', result: 'Serine'  },
  { key: 'UCG', result: 'Serine'  },
  { key: 'CCU', result: 'Proline'  },
  { key: 'CCC', result: 'Proline'  },
  { key: 'CCA', result: 'Proline'  },
  { key: 'CCG', result: 'Proline'  },
  { key: 'ACU', result: 'Threonine'  },
  { key: 'ACC', result: 'Threonine'  },
  { key: 'ACA', result: 'Threonine'  },
  { key: 'ACG', result: 'Threonine'  },
  { key: 'GCU', result: 'Alanine'  },
  { key: 'GCC', result: 'Alanine'  },
  { key: 'GCA', result: 'Alanine'  },
  { key: 'GCG', result: 'Alanine'  },
  { key: 'UAU', result: 'Tyrosine'  },
  { key: 'UAC', result: 'Tyrosine'  },
  { key: 'UAA', result: 'STOP'  },
  { key: 'UAG', result: 'STOP'  },
  { key: 'CAU', result: 'Histidine'  },
  { key: 'CAC', result: 'Histidine'  },
  { key: 'CAA', result: 'Glutamine'  },
  { key: 'CAG', result: 'Glutamine'  },
  { key: 'AAU', result: 'Asparagine'  },
  { key: 'AAC', result: 'Asparagine'  },
  { key: 'AAA', result: 'Lysine'  },
  { key: 'AAG', result: 'Lysine'  },
  { key: 'GAU', result: 'Aspartic acid'  },
  { key: 'GAC', result: 'Aspartic acid'  },
  { key: 'GAA', result: 'Glutamic acid'  },
  { key: 'GAG', result: 'Glutamic acid'  },
  { key: 'UGU', result: 'Cysteine'  },
  { key: 'UGC', result: 'Cysteine'  },
  { key: 'UGA', result: 'STOP'  },
  { key: 'UGG', result: 'Tryptophan'  },
  { key: 'CGU', result: 'Arginine'  },
  { key: 'CGC', result: 'Arginine'  },
  { key: 'CGA', result: 'Arginine'  },
  { key: 'CGG', result: 'Arginine'  },
  { key: 'AGU', result: 'Serine'  },
  { key: 'AGC', result: 'Serine'  },
  { key: 'AGA', result: 'Arginine'  },
  { key: 'AGG', result: 'Arginine'  },
  { key: 'GGU', result: 'Glycine'  },
  { key: 'GGC', result: 'Glycine'  },
  { key: 'GGA', result: 'Glycine'  },
  { key: 'GGG', result: 'Glycine'  }
  ];