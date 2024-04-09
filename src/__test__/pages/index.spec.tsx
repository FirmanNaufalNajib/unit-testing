//case 1st

import React from "react";
import {render} from "@testing-library/react"
import Home from "@/pages"

describe('home page', () => { // deskripsi ada pada param 1

  //case 1st
  it('should handle render homepage', () => { // it sebagai test // deskripsi ada pada param 1
    const {container} = render(<Home/>); // container = membehaviorkan seluruh halaman hon sebagai container
    expect(container).toMatchSnapshot() // cek jestjs.io/docs/expect to vary method
  });

  //dalam proses run test maka render(<Home/>) akan di-run dan inidkator keberhasilnnya adalah menghasilakn folder __snapshot__ 
  //yang berisikan file index.spec.tsx.snap

  //case 2nd
  it('should handle text homepage', () => { 
    const { getByText } = render(<Home/>); //mencari dalam document <Home/> berupa text 
    expect(getByText('Find in-depth information about Next.js features and API.')).toBeInTheDocument() //ekspektasinya mengecek apakah text terlampir ada dalam document <Home/>
  });

  //case 3rd
  it('should handle element use role homepage', () => { 
    const { getByRole } = render(<Home/>);  //mencari dalam document <Home/> berupa attribute role
    expect(getByRole('subtitle')).toBeInTheDocument() // nilai attribute nya adalah subtitle
  });

  // run dengan npm run test -- -u jika sudah terdapat file index.spec.tsx sebelumnya dalam folder snapshot
});








