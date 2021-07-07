import { Component } from "react";
import PropTypes from "prop-types";
import { WrapperForm, BtnAdd, BtnText, Container, Input, InputTitle} from "./Form.styles";
import { BsFillPersonPlusFill } from "react-icons/bs";

class Form extends Component {
  state = {
    name: "",
    number: "",
  };

  handleInputChange = (event) => {
    const { name, value } = event.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state);

    this.resetForm();
  };

  resetForm = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    return (
      <WrapperForm>
        <form onSubmit={this.handleSubmit}>
          <Container>
            <label>
              <InputTitle>Name</InputTitle>
              <Input
                type="text"
                name="name"
                value={this.state.name}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. 
                        Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                required
                onChange={this.handleInputChange}
              />
            </label>
          </Container>

          <Container>
            <label>
              <InputTitle>Number</InputTitle>
              <Input
                type="tel"
                name="number"
                value={this.state.number}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Номер телефона должен состоять цифр и может содержать пробелы, тире, 
                        круглые скобки и может начинаться с +"
                required
                onChange={this.handleInputChange}
              />
            </label>
          </Container>

          <BtnAdd type="submit">
            <BtnText>Add contact</BtnText>
            <BsFillPersonPlusFill size={16} />
          </BtnAdd>
        </form>
      </WrapperForm>
    );
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  value: PropTypes.string,
  onChangeInput: PropTypes.func,
};

export default Form;
