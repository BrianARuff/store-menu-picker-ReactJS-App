import React from "react";

class AddFishForm extends React.Component {

  createFish(event){
    event.preventDefault();
    console.log('created fish');
    const fish = {
      name: this.name.value,
      price: this.price.value,
      status: this.status.value,
      description: this.description.value,
      image: this.image.value,
    }
    console.log(fish);
    this.props.addFish(fish);
    this.fishForm.reset();
  }

  render() {
    return (
      <form ref={input => this.fishForm = input} className="fish-edit" onSubmit={(event) => this.createFish(event)}>
        <input ref={input => this.name = input} type="text" placeholder="Fish name" />
        <input ref={input => this.price = input} type="text" placeholder="Fish Price" />
        <select ref={input => this.status = input}>
          <option value="available">Fresh Fish!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea ref={(input) => this.description = input} placeholder='Fish Description'/>
        <input ref={(input) => this.image = input} type="text" placeholder='Fish Image'/>
        <button type="submit">+ Add Item</button>
      </form>
    );
  }
}

export default AddFishForm;
