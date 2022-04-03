import { render, screen } from "@testing-library/react";
import React from "react";
import DishCard from "./DishCard";
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({ useNavigate: () => mockNavigate }));
describe('DishCard component',()=>{
    const mockRestName = {messgae:[]};
    const mocksetIsClicked = jest.fn();
    const mocksetSearchDish=jest.fn();
    const mockRestName1= {messgae:[{
        dishName:'soup',
        price:'200',
        rating:4,
        restaurant:{
            restaurantName:'A'
        }
    }]}
    it('should render  no results if dish is not present', ()=>{
        render(<DishCard RestName={mockRestName} setIsClicked={mocksetIsClicked} setSearchDish={mocksetSearchDish}/>)
        expect(screen.getByTestId('noResultContainer')).toBeTruthy();
        expect(screen.getByTestId('noResults')).toBeTruthy();
        expect(screen.getByTestId('back-btn')).toBeTruthy();
    });
    it('should not render results if dish is not present', ()=>{
        render(<DishCard RestName={mockRestName} setIsClicked={mocksetIsClicked} setSearchDish={mocksetSearchDish}/>)
        expect(screen.queryByTestId('ResultConatiner')).toBeFalsy();
        expect(screen.queryByTestId('restCard')).toBeFalsy();
        expect(screen.queryByTestId('dishName')).toBeFalsy();
        expect(screen.queryByTestId('price')).toBeFalsy();
        expect(screen.queryByTestId('rating')).toBeFalsy();
        expect(screen.queryByTestId('restName')).toBeFalsy();
    });
    it('should not render the no results elements when dish is present',()=>{
        render(<DishCard RestName={mockRestName1} setIsClicked={mocksetIsClicked} setSearchDish={mocksetSearchDish}/>)
        expect(screen.queryByTestId('noResultContainer')).toBeFalsy();
        expect(screen.queryByTestId('noResults')).toBeFalsy();
        expect(screen.queryByTestId('back-btn')).toBeFalsy();
    });
    it('should render the rest cards if the dish is present', ()=>{
        render(<DishCard RestName={mockRestName1} setIsClicked={mocksetIsClicked} setSearchDish={mocksetSearchDish}/>)
        expect(screen.getByTestId('ResultConatiner')).toBeTruthy();
        expect(screen.getByTestId('restCard')).toBeTruthy();
        expect(screen.getByTestId('dishName')).toBeTruthy();
        expect(screen.getByTestId('price')).toBeTruthy();
        expect(screen.getByTestId('rating')).toBeTruthy();
        expect(screen.getByTestId('restName')).toBeTruthy();
    });

})