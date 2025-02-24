import CheckOutLayer from '../ui/check-out-layer'
import BoughtLayer from '../ui/comp-bought-layer'
import UserLayer from '../ui/comp-user-layer'
import ViewLayer from '../ui/comp-view-layer'
import User from '../ui/user'

export type Watermelon = {
  position: string
}

export const newSlices = [
  {
    "key": 1,
    "card": {
      "text": <p>Imagine a small stand with 5 watermelons. Three customers—Harold, Alice, and Joe—each have a shopping cart and want to buy watermelons.</p>
    },
    "showErrorMark": "hidden",
    "watermelons": [
      { "position": "wt-1" },
      { "position": "wt-2" },
      { "position": "wt-3" },
      { "position": "wt-4" },
      { "position": "wt-5" }
    ],
    "carts": [
      <User
        key={1}
        layers={[
          <UserLayer
            avatar="u.svg"
            name="Joe"
            key={1}
            position="wt-user-1"
            watermelons={[]}
            state={<></>}
          ></UserLayer>,
          <></>,
          <></>,
          <></>,
        ]}
      />,
      <User
        key={2}
        layers={[
          <UserLayer
            avatar="u-2.svg"
            name="Alice"
            key={1}
            position="wt-user-2"
            watermelons={[]}
            state={<></>}
          ></UserLayer>,
          <></>,
          <></>,
          <></>,
        ]}
      />,
      <User
        key={3}
        layers={[
          <UserLayer
            avatar="u-3.svg"
            name="Harold"
            key={1}
            position="wt-user-3"
            watermelons={[]}
            state={<></>}
          ></UserLayer>,
          <></>,
          <></>,
          <></>,
        ]}
      />,
    ]
  },
  {
    "key": 2,
    "card": {
      "text": <p>Each customer checks how many watermelons are available. The system tells them there are 5 watermelons.</p>
    },
    "showErrorMark": "hidden",
    "watermelons": [
      { "position": "wt-1" },
      { "position": "wt-2" },
      { "position": "wt-3" },
      { "position": "wt-4" },
      { "position": "wt-5" }
    ],
    "carts": [
      <User
        key={1}
        layers={[
          <UserLayer
            avatar="u.svg"
            name="Joe"
            key={1}
            position="wt-user-1"
            watermelons={[]}
            state={
              <ViewLayer
                key={1}
                seenWatermelons={5}
              ></ViewLayer>
            }
          ></UserLayer>,
          <></>,
          <></>,
          <></>,
        ]}
      />,
      <User
        key={2}
        layers={[
          <UserLayer
            avatar="u-2.svg"
            name="Alice"
            key={1}
            position="wt-user-2"
            watermelons={[]}
            state={
              <ViewLayer
                key={1}
                seenWatermelons={5}
              ></ViewLayer>
            }
          ></UserLayer>,
          <></>,
          <></>,
          <></>,
        ]}
      />,
      <User
        key={3}
        layers={[
          <UserLayer
            avatar="u-3.svg"
            name="Harold"
            key={1}
            position="wt-user-3"
            watermelons={[]}
            state={
              <ViewLayer
                key={1}
                seenWatermelons={5}
              ></ViewLayer>
            }
          ></UserLayer>,
          <></>,
          <></>,
          <></>,
        ]}
      />,
    ]
  },
  {
    "key": 3,
    "card": {
      "text": <p>Harold wants 1 watermelon, Alice wants 2, and Joe wants 3. Each person adds watermelons to their cart based on what they saw earlier.</p>
    },
    "showErrorMark": "hidden",
    "watermelons": [
      { "position": "wt-1" },
      { "position": "wt-2" },
      { "position": "wt-3" },
      { "position": "wt-4" },
      { "position": "wt-5" }
    ],
    "carts": [ 
      <User
        key={1}
        layers={[
          <UserLayer
            avatar="u.svg"
            name="Joe"
            key={1}
            position="wt-user-1"
            watermelons={[]}
            state={
              <BoughtLayer
                key={1}
                watermelonsToBuy={3}
              ></BoughtLayer>
            }
          ></UserLayer>,
          <></>,
          <></>,
          <></>,
          <></>,
        ]}
      />,
      <User
        key={2}
        layers={[
          <UserLayer
            avatar="u-2.svg"
            name="Alice"
            key={1}
            position="wt-user-2"
            watermelons={[]}
            state={
              <BoughtLayer
                key={1}
                watermelonsToBuy={2}
              ></BoughtLayer>
            }
          ></UserLayer>,
          <></>,
          <></>,
          <></>,
          <></>,
        ]}
      />,
      <User
        key={3}
        layers={[
          <UserLayer
            avatar="u-3.svg"
            name="Harold"
            key={1}
            position="wt-user-3"
            watermelons={[]}
            state={
              <BoughtLayer
                key={1}
                watermelonsToBuy={1}
              ></BoughtLayer>
            }
          ></UserLayer>,
          <></>,
          <></>,
          <></>,
          <></>,
        ]}
      />,
    ]
  },
  {
    "key": 4,
    "card": {
      "text": <div className=''>When each person checks out, they each tell the system:<ul className='list-disc ml-4'><li>Joe: 'Subtract 3 from 5.' (New stock: 2)</li><li>Alice: 'Subtract 2 from 5.' (New stock: 3)</li><li>Harold: 'Subtract 1 from 5.' (New stock: 4)</li></ul>The problem? These updates don't see each other and overwrite each other.</div>
    },
    "showErrorMark": "hidden",
    "watermelons": [],
    "carts": [
      <User
        key={1}
        layers={[
          <UserLayer
            avatar="u.svg"
            name="Joe"
            key={1}
            position="wt-user-1"
            watermelons={[
              { position: 'wt-cart-1' },
              { position: 'wt-cart-2' },
              { position: 'wt-cart-3' },
            ]}
            state={<></>}
          ></UserLayer>,
          <></>,
          <></>,
          <CheckOutLayer
            key={2}
            watermelonsToBuy={3}
            position="wt-user-1"
            mark='hidden'
          ></CheckOutLayer>,
        ]}
      />,
      <User
        key={2}
        layers={[
          <UserLayer
            avatar="u-2.svg"
            name="Alice"
            key={1}
            position="wt-user-2"
            watermelons={[{ position: 'wt-cart-1' }, { position: 'wt-cart-2' }]}
            state={<></>}
          ></UserLayer>,
          <></>,
          <></>,
          <CheckOutLayer
            key={6}
            watermelonsToBuy={2}
            position="wt-user-2"
            mark='hidden'
          ></CheckOutLayer>,
        ]}
      />,
      <User
        key={3}
        layers={[
          <UserLayer
            avatar="u-3.svg"
            name="Harold"
            key={1}
            position="wt-user-3"
            watermelons={[{ position: 'wt-cart-1' }]}
            state={<></>}
          ></UserLayer>,
          <></>,
          <></>,
          <CheckOutLayer
            key={5}
            watermelonsToBuy={1}
            position="wt-user-3"
            mark=''
          ></CheckOutLayer>,
        ]}
      />,
    ]
  },
  {
    "key": 5,
    "card": {
      "text": <p>The system expected 5 - (2 + 3 + 1) = 0 watermelons left, but due to lost updates, the system now incorrectly thinks there are still 4 left! This happened because each transaction ignored the others.</p>
    },
    "showErrorMark": "",
    "watermelons": [
      { "position": "wt-1" },
      { "position": "wt-2" },
      { "position": "wt-3" },
      { "position": "wt-4" }
    ],
    "carts": [
      <User
        key={1}
        layers={[
          <UserLayer
            avatar="u.svg"
            name="Joe"
            key={1}
            position="wt-user-1"
            watermelons={[
              { position: 'wt-cart-1' },
              { position: 'wt-cart-2' },
              { position: 'wt-cart-3' },
            ]}
            state={<></>}
          ></UserLayer>,
          <></>,
          <></>,
          <></>,
        ]}
      />,
      <User
        key={2}
        layers={[
          <UserLayer
            avatar="u-2.svg"
            name="Alice"
            key={1}
            position="wt-user-2"
            watermelons={[{ position: 'wt-cart-1' }, { position: 'wt-cart-2' }]}
            state={<></>}
          ></UserLayer>,
          <></>,
          <></>,
          <></>,
        ]}
      />,
      <User
        key={3}
        layers={[
          <UserLayer
            avatar="u-3.svg"
            name="Harold"
            key={1}
            position="wt-user-3"
            watermelons={[{ position: 'wt-cart-1' }]}
            state={<></>}
          ></UserLayer>,
          <></>,
          <></>,
          <></>,
        ]}
      />, 
    ]
  }  
]