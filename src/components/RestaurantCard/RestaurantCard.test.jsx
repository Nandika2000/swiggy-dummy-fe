/* eslint-disable testing-library/prefer-presence-queries */
import { render, screen ,fireEvent} from "@testing-library/react";
import React from "react";
import RestaurantCard from "./RestaurantCard";
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({ useNavigate: () => mockNavigate }));

describe('RestaurantCard component',()=>{
    const mockRestNames = {message:[
        {
            restaurantName:'A',
            id:2,
            costForTwo:'200',
            location:'Jammu'
        }
    ]}
    it('should have the required elements when RestaurantCard is rendered', () => {
        render(<RestaurantCard restaurantsName={mockRestNames}/>);
        expect(screen.getByTestId('RestCardContainer')).toBeTruthy();
        expect(screen.queryByTestId('RestCard')).toBeTruthy();
        expect(screen.queryByTestId('RestName')).toBeTruthy();
        expect(screen.queryByTestId('RestCost')).toBeTruthy();
        expect(screen.queryByTestId('RestLoc')).toBeTruthy();
      });
    it('should navigate to menu when restaurant is clicked', ()=>{
        render(<RestaurantCard restaurantsName={mockRestNames}/>);
        fireEvent.click(screen.getByTestId('RestCardBtn'));
        expect(mockNavigate).toHaveBeenCalledWith('/menu/2');
    });
    it('should not navigate if button is not clicked',()=>{
        render(<RestaurantCard restaurantsName={mockRestNames}/>);
        expect(mockNavigate).toBeCalledTimes(0);
    });
})