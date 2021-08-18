import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component {
	id = 2;
	state = {
		information: [
			{
				id: 0,
				name: '공아름',
				phone: '010-1234-1234',
			},
			{
				id: 1,
				name: '공마요',
				phone: '010-0000-0000',
			},
		],
		keyword: '',
	};
	handleChange = (e) => {
		this.setState({
			keyword: e.target.value,
		});
	};
	handleCreate = (data) => {
		const { information } = this.state;
		this.setState({
			information: information.concat({ id: this.id++, ...data }),
		});
	};
	handleRemove = (id) => {
		const { information } = this.state;
		this.setState({
			information: information.filter((info) => info.id !== id),
		});
	};
	handleUpdate = (id, data) => {
		const { information } = this.state;
		this.setState({
			information: information.map((info) =>
				id === info.id ? { ...info, ...data } : info
			),
		});
	};
	render() {
		const { information, keyword } = this.state;
		return (
			<div>
				<PhoneForm onCreate={this.handleCreate} />
				<p>
					<input
						placeholder="검색어를 입력하세요"
						onChange={this.handleChange}
						value={keyword}
					/>
				</p>
				<PhoneInfoList
					data={this.state.information}
					onRemove={this.handleRemove}
					onUpdate={this.handleUpdate}
				/>
			</div>
		);
	}
}

export default App;
