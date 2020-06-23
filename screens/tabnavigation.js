import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Router, Scene, Drawer } from 'react-native-router-flux';

const TabIcon = ({ focused, title }) => {
    switch (title) {
        case "Home":
            color = focused ? 'black' : 'grey';
            return (
                <View style={styles.tabView}>
                    <Icon name="ios-home" size={30} color={color} />
                    <Text style={styles.tabLabel}>Home</Text>
                </View>
            );
        case "Categories":
            color = focused ? 'black' : 'grey';
            return (
                <View style={styles.tabView}>
                    <Icon name="ios-list" size={30} color={color} />
                    <Text style={styles.tabLabel}>Categories</Text>
                </View>
            );
        case "Search":
            color = focused ? 'black' : 'grey';
            return (
                <View style={styles.tabView}>
                    <Icon name="ios-search" size={30} color={color} />
                    <Text style={styles.tabLabel}>Search</Text>
                </View>
            );
        case "Profile":
            color = focused ? 'black' : 'grey';
            return (
                <View style={styles.tabView}>
                    <Icon name="md-person" size={30} color={color} />
                    <Text style={styles.tabLabel}>Profile</Text>
                </View>
            );
    }

};

class tabnavigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <Router>
                <Scene key="root" hideNavBar>
                    <Scene key="splash" component={Splash} initial />
                    <Scene key="main" tabs={true} swipeEnabled={false} tabBarPosition={'bottom'}
                        tabBarStyle={styles.tabBar} showLabel={false} default="home">
                        <Scene
                            key="home"
                            title="Home"
                            icon={TabIcon}
                            hideNavBar={true}
                            initial
                            component={Hosme} />
                        <Scene
                            key="categories"
                            title="Categories"
                            icon={TabIcon}
                            hideNavBar={true}
                            component={Categories} />
                        <Scene
                            key="search"
                            title="Search"
                            icon={TabIcon}
                            hideNavBar={true}
                            component={Search} />
                        <Scene
                            key="profile"
                            title="Profile"
                            icon={TabIcon}
                            hideNavBar={true}
                            component={Profile} />
                    </Scene>

                </Scene>
            </Router>
        )
    }
}

export default tabnavigation;


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tabBar: {
        backgroundColor: 'white',
    },
    navigationBarStyle: {
        backgroundColor: 'red',
    },
    navigationBarTitleStyle: {
        color: 'white',
    },
    icon: {
        width: 18,
        height: 22,
        padding: 5
    },
    tabView: {
        alignItems: 'center'
    },
    tabLabel: {
        fontSize: 12,
        textAlign: 'center'
    },

});
