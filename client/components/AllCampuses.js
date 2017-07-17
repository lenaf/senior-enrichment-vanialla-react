import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

export default class AllCampuses extends Component {
	constructor() {
		super();
		this.state = {
			campuses: []
		};
	}

	componentDidMount() {
		axios.get('/api/campuses/')
			.then(res => res.data)
			.then(campuses => {
				this.setState({ campuses })
			});
	}

	render() {
		const campuses = this.state.campuses

		return (
			<div id="all-campuses">
				<div className="row">
					{
						campuses.map(campus => (
							<div className="col-sm-3" key={campus.id}>
								<Link to={`/campuses/${campus.id}`}>
									<img className="img-responsive" src={campus.image} />
									<div className="caption text-center">
										<h5>
											<span>{campus.name}</span>
										</h5>
									</div>
								</Link>
							</div>
						))
					}
				</div>
			</div>
		);
	}
}

