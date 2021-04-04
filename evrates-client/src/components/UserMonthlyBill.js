

const UserMonthlyBill =({handleElectricChange,electricBill} )=>{

    return(
        <div>
        <h3>What is the cost of your current monthly electric bill? </h3>
        <input
          name='electic_bill'
          type='number'
          value={electricBill}
          onChange={handleElectricChange}
          placeholder='Enter Current Electric Bill'
        />
        </div>
        
    )
}
export default UserMonthlyBill