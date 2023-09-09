
import {

    FlatList,
    StyleSheet,
    Text,
    View

} from "react-native";


const FlastListDemo = () => {

    const names = [
        {
            name: "Kamran",
        },

        {
            name: "Noman",
        },

        {
            name: "Bilal",
        },

        {
            name: "Kamran",
        },

        {
            name: "Noman",
        },

        {
            name: "Bilal",
        },

        {
            name: "Kamran",
        },

        {
            name: "Noman",
        },

        {
            name: "Bilal",
        },
        

        {
            name: "Saad",
        },

        {
            name: "Talha",
        },
        {
            name: "Zaid",
        },
        {
            name: "Hasnain",
        },
        {
            name: "Sajawal",
        },
        {
            name: "Huraira",
        },
        {
            name: "Robert",
        },
        {
            name: "James",
        },
        {
            name: "Javed",
        },
        {
            name: "Bilal",
        },
        {
            name: "Huzaifa",
        },
        {
            name: "Tayyab",
        },
        {
            name: "Jahngeer",
        },
        {
            name: "Dilawar",
        },
        {
            name: "Junaid",
        },
        {
            name: "Zulqarnain",
        },
        {
            name: "Zeeshan",
        },
        {
            name: "Anjum",
        },

       
    

    ]
    


    return (

        <View>

            {/* Horizontal Flat List */}

            <FlatList
                horizontal={true}
                data={names}
                renderItem={(element) => {
                    return <Text style={styles.textStyle} >{element.item.name}</Text>
                }}
            />



            {/* Vertical Flat List */}

            <FlatList

                data={names}
                renderItem={(element) => {
                    return <Text style={styles.textStyle} >{element.item.name}</Text>
                }}
            />

        </View>

    );

}

const styles = StyleSheet.create({

    textStyle: {
        fontSize: 30,
    },

});

export default FlastListDemo