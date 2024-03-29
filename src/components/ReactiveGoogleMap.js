import { ReactiveGoogleMap } from "@appbaseio/reactivesearch-quarkly";
import atomize from '@quarkly/atomize';
import React from 'react';

const ReactiveGoogleMapWrapper = props => {
	return <ReactiveGoogleMap {...props} renderData={() => ({
		custom: <div style={{
			background: 'dodgerblue',
			color: '#fff',
			paddingLeft: 5,
			paddingRight: 5,
			borderRadius: 3,
			padding: 10
		}}>
			<i className="fa fa-home" />
		</div>
	})} onPopoverClick={item => <div style={{
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		maxWidth: "300px"
	}}>
		<div style={{
			margin: '3px 0',
			height: '100px',
			width: '100%',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center'
		}}>
			<img style={{
				margin: '3px 0',
				height: '100%'
			}} src={item.picture_url} alt={item.name} />
		</div>
		<div style={{
			margin: '3px 0'
		}}>
			<b>
				Name: 
			</b>
			{item.name}
		</div>
		<div style={{
			margin: '3px 0'
		}}>
			<b>
				Room Type: 
			</b>
			{item.room_type}
		</div>
		<div style={{
			margin: '3px 0'
		}}>
			<b>
				Property Type: 
			</b>
			{item.property_type}
		</div>
	</div>} />;
};

export default atomize(ReactiveGoogleMapWrapper)({
	title: 'ReactiveGoogleMap',
	description: ReactiveGoogleMap.description,
	propInfo: ReactiveGoogleMap.propInfo,
	defaultProps: ReactiveGoogleMap.defaultProps
});