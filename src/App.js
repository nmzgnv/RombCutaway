import React, { useState } from 'react';
import { View, AdaptivityProvider, AppRoot } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import Cutaway from "./panels/Cutaway";

const App = () => {
	const [activePanel, setActivePanel] = useState('cutaway');
	return (
		<AdaptivityProvider>
			<AppRoot>
				<View activePanel={activePanel}>
					<Cutaway id={'cutaway'} />
				</View>
			</AppRoot>
		</AdaptivityProvider>
	);
}

export default App;
