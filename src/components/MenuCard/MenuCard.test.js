/* eslint-disable testing-library/prefer-presence-queries */
import { render, screen } from "@testing-library/react";
import React from "react";
import MenuCard from "./MenuCard";

describe('MenuCard component', ()=>{
    const mockDishNames = {message:[
        {
            dishName:'A',
            price:'200',
            rating:4
        }
    ]};
    it('should have the required elements when MenuCard is rendered', () => {
        render(<MenuCard dishesName={mockDishNames}/>);
        expect(screen.getByTestId('dishCardContainer')).toBeTruthy();
        expect(screen.queryByTestId('dishCard')).toBeTruthy();
        expect(screen.queryByTestId('dishName')).toBeTruthy();
        expect(screen.queryByTestId('dishPrice')).toBeTruthy();
        expect(screen.queryByTestId('dishRating')).toBeTruthy();
      });
})