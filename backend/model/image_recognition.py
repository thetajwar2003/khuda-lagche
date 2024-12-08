from tensorflow.keras.preprocessing.image import img_to_array, load_img, ImageDataGenerator
from tensorflow.keras.models import load_model
import os
import numpy as np
# os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2'

# Load Keras model
MODEL_PATH = "image_recognition.keras"
model = load_model(MODEL_PATH)
target_size = (224, 224)
batch_size = 32


def preprocess_image(image_path):
    """
    Preprocesses the image to the required input format for the model.
    """
    image = load_img(image_path, target_size=target_size)
    image = img_to_array(image) / 255.0
    image = np.expand_dims(image, axis=0)
    return image


def predict_image(file_path):
    """
    Predict the class of a single image.
    """
    preprocessed_image = preprocess_image(file_path)
    predictions = model.predict(preprocessed_image)
    predicted_class = np.argmax(predictions, axis=1)[0]
    confidence_score = float(np.max(predictions))
    return {"predicted_class": int(predicted_class), "confidence_score": confidence_score}


def evaluate_model(test_data_dir):
    """
    Evaluates the model on a test dataset provided as a directory.
    """
    valid_extensions = {'.jpg', '.jpeg', '.png'}

    # Remove invalid files
    for root, _, files in os.walk(test_data_dir):
        for file_name in files:
            _, ext = os.path.splitext(file_name)
            if ext.lower() not in valid_extensions:
                os.remove(os.path.join(root, file_name))

    # Load test data
    test_datagen = ImageDataGenerator(rescale=1.0 / 255)
    test_generator = test_datagen.flow_from_directory(
        test_data_dir,
        target_size=target_size,
        batch_size=batch_size,
        class_mode='categorical',
        shuffle=False
    )

    # Evaluate model
    return model.evaluate(test_generator)
